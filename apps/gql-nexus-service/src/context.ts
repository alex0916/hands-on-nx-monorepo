import { CommentService, PostService } from './datasources';

export interface DataSources {
	commentService: CommentService;
	postService: PostService;
}

export interface Context {
	dataSources: DataSources;
}

// @TODO Add server cache to the dataSources
const initializeDataSources = (): DataSources => ({
	commentService: new CommentService(),
	postService: new PostService(),
});

export const context: Context = {
	dataSources: initializeDataSources(),
};
