import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() => {
    const query = gql`
    query MyQuery {
        articlesConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featureImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }      
    `;

    const results = await request(graphqlAPI, query);
    return results.articlesConnection.edges;
}