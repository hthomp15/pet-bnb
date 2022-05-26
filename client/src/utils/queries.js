import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    username
    email
    password
    posts {
      _id
      postText
      createdAt
      username
    }
  }
}
`;