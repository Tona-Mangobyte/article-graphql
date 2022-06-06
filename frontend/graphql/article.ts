import gql from "graphql-tag";

export const GET_ARTICLES = gql` query($page: Int!, $limit: Int!){
  articles(page: $page, limit: $limit) {
    id,
    title,
    content
  }
}`
