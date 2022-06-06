import gql from "graphql-tag";

export const GET_ARTICLES = gql` query($page: Int!, $limit: Int!){
  getAllArticles(page: $page, limit: $limit) {
    pagination{page, next, previous, limit, pageCount, total},
    items{id, title, content},
  }
}`
export const CREATE_ARTICLE = gql` mutation($title: String!, $content: String!){
  createArticle(article: {title: $title, content: $content}) {
    id,
    title,
    content
  }
}`
