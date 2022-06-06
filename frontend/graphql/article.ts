import gql from "graphql-tag";

export const GET_ARTICLES = gql` query($page: Int!, $limit: Int!){
  articles(page: $page, limit: $limit) {
    id,
    title,
    content
  }
}`
export const CREATE_ARTICLE = gql` mutation($title: String!, $content: String!){
  createArticle(article: {title: $title, content: $content}) {
    id,
    title,
    content
  }
}`
