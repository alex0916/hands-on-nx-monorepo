import gql from 'graphql-tag';

export const COMMENTS_BY_POST_ID = gql`
	query getCommentsByPostId($postId: String!, $first: Int, $after: String) {
		commentsByPostId(postId: $postId, first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					name
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
				startCursor
				endCursor
			}
		}
	}
`;
