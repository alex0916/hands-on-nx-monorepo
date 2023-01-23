import { CommentService, PostService, UserService } from './datasources';

export interface DataSources {
	commentService: CommentService;
	postService: PostService;
	userService: UserService;
}

export interface Context {
	dataSources: DataSources;
}

// @TODO Add cache to the dataSources
const initializeDataSources = (): DataSources => ({
	commentService: new CommentService(),
	postService: new PostService(),
	userService: new UserService(),
});

export const context: Context = {
	dataSources: initializeDataSources(),
};
