import gql from 'graphql-tag';

export const POSTS = gql`
	query getPosts($first: Int, $after: String) {
		posts(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					title
					body
					user {
						id
						name
						email
						avatar
					}
					totalComments
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
