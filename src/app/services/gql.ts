import gql from 'graphql-tag';
export const searchQuery = gql`
          query searchQuery($term: String!){
            graphQLHub
            twitter {
              search(q: $term, count: 10, result_type: mixed) {
                user {
                  screen_name
                  profile_image_url
                }
                id
                text
              }
            }
          }
      `;
