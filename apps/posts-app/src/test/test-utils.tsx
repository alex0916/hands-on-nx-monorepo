import { ReactElement, ReactNode } from 'react';
import { InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { render, RenderOptions } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ThemeContextProvider } from '../contexts';

export type GqlMock = MockedResponse<Record<string, any>>;

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				posts: relayStylePagination(),
				users: relayStylePagination(),
				commentsByPostId: relayStylePagination(),
			},
		},
		User: {
			fields: {
				posts: relayStylePagination(),
			},
		},
	},
});

const AllTheProviders = ({ children, mocks }: { children: ReactNode; mocks?: GqlMock[] }) => (
	<MockedProvider mocks={mocks} cache={cache}>
		<ThemeContextProvider>{children}</ThemeContextProvider>
	</MockedProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'> & { mocks?: GqlMock[] }) => {
	const { mocks, ...rest } = options ?? {};
	return render(<AllTheProviders mocks={mocks}>{ui}</AllTheProviders>, rest);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
