import { gql } from '@apollo/client';

export const QUERY_USER_POST = gql`
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

export const QUERY_PETS = gql`
query Pets {
  pets {
    _id
    petName
    petType
    petNotes
  }
}
`;

export const QUERY_USERS = gql`
query Query {
  users {
    _id
    username
    email
    password
  }
}
`;

export const QUERY_POSTS = gql`
query Query {
  posts {
    _id
    postText
    createdAt
    username
    comments {
      _id
      commentText
      createdAt
      username
    }
  }
}`