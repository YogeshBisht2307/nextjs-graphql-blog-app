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
};


export const getPostDetail = async( slug ) => {
    const query = gql`
        query GetPostDetail($slug: String! ) {
            article(where: { slug: $slug } ){
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
                content {
                    raw
                }
            }
        }      
    `;

    const results = await request(graphqlAPI, query, { slug });
    return results.article;
};


export const getRecentPosts = async() => {
    const query = gql`
        query GetRecentPosts(){
            articles(
                orderBy: createdAt_ASC
                last: 3
            ){
                title 
                featureImage{
                    url
                }
                createdAt
                slug
            }
        }
    `;
    const result = await request(graphqlAPI, query);
    return result.articles;
};


export const getSimilarPost = async (slug, categories) => {
    const query = gql`
        query getSimilarPosts( $slug: String!, $categories: [String!] ) {
            articles(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
                last: 3
            ){
                title 
                featureImage{
                    url
                }
                createdAt
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug, categories });
    return result.articles;
};


export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.categories;
};


export const getCategoryPost = async (slug) => {
    const query = gql`
        query GetCategoryPost($slug: String!) {
            articlesConnection(where: {categories_some: {slug: $slug}}) {
                edges {
                    cursor
                      node {
                          author {
                              bio
                              name
                              id
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

  const result = await request(graphqlAPI, query, { slug });
  return result.articlesConnection.edges;
};


export const submitComment = async(ojb)  => {
    const result = await fetch('/api/comments',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ojb),
    })

    return result.json();
};


export const getComments = async (slug) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { article: { slug: $slug }}){
                name
                createdAt
                comment
            }
        }
    `;
  const result = await request(graphqlAPI, query, { slug });
  return result.comments;
};

export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        articles(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featureImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
    return result.articles;
  };