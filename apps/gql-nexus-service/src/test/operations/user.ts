import gql from 'graphql-tag';

export const USERS = gql`
	query getUsers($first: Int, $after: String) {
		users(first: $first, after: $after) {
			edges {
				cursor
				node {
					id
					avatar
					email
					name
					username
					stats {
						totalComments
						totalPosts
					}
					address {
						street
						suite
						city
						zipcode
					}
					company {
						name
						catchPhrase
						bs
					}
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

export const USER_BY_ID = gql`
	query getUserById($userId: String, $first: Int, $after: String) {
		userById(id: $userId) {
			id
			name
			username
			email
			address {
				city
			}
			company {
				name
			}
			avatar
			posts(first: $first, after: $after) {
				edges {
					cursor
					node {
						id
						title
						body
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
	}
`;
