import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { NexusGenObjects } from '../generated/nexus-typegen';

type ApiResponse<T> = T & {
	id: string;
};

type PageArgs = {
	after?: string;
	before?: string;
	first?: number;
	last?: number;
};

type Edge<T> = {
	cursor: string;
	node: T;
};

type ConnectionResponseType<T> = {
	edges: Edge<T>[];
	pageInfo: NexusGenObjects['PageInfo'];
};

export class ConnectionResponse<T> {
	private args: PageArgs;
	private data: ApiResponse<T>[];
	private page: ApiResponse<T>[];

	constructor(args: PageArgs, data: ApiResponse<T>[]) {
		this.args = args;
		this.data = data;
		this.page = this.args.first ? this.getForwardPage() : this.getBackwardPage();
	}

	static fromResolver<T>(args: PageArgs, data: ApiResponse<T>[]) {
		return new ConnectionResponse(args, data);
	}

	private getForwardPage() {
		const { after, first } = this.args;
		const afterCursorIndex = this.data.findIndex(({ id }) => String(id) === after);
		if (afterCursorIndex === -1 && after) {
			throw new GraphQLError('Cursor not found', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } });
		}
		// Check if the after cursor index is valid, if not, then return the first items.
		const sliceAfterIndex = afterCursorIndex === -1 ? 0 : afterCursorIndex + 1;
		return [...this.data.slice(sliceAfterIndex, first + sliceAfterIndex)];
	}

	private getBackwardPage() {
		const { before, last } = this.args;
		const beforeCursorIndex = this.data.findIndex(({ id }) => String(id) === before);
		if (beforeCursorIndex === -1) {
			throw new GraphQLError('Cursor not found', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } });
		}
		const startIndex = beforeCursorIndex - last;
		// Use the start of the array if the startIndex is a negative number
		return [...this.data.slice(startIndex > 0 ? startIndex : 0, beforeCursorIndex)];
	}

	private getPageInfo(): ConnectionResponseType<T>['pageInfo'] {
		let endCursor = null;
		let startCursor = null;

		if (this.page.length > 0) {
			startCursor = this.page[0].id;
			endCursor = this.page[this.page.length - 1].id;
		}

		let hasNextPage = false;
		let hasPreviousPage = false;

		if (this.data.length > 0) {
			hasNextPage = ![this.data[this.data.length - 1].id, null].includes(endCursor);
			hasPreviousPage = startCursor !== this.data[0].id;
		}

		return {
			startCursor,
			endCursor,
			hasNextPage,
			hasPreviousPage,
		};
	}

	private getEdges(): ConnectionResponseType<T>['edges'] {
		return this.page.map((item) => ({
			cursor: item.id,
			node: {
				...item,
			},
		}));
	}

	getResponse(): ConnectionResponseType<T> {
		return {
			edges: this.getEdges(),
			pageInfo: this.getPageInfo(),
		};
	}
}
