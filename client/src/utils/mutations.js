import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $phone: String!) {
    addUser(username: $username, email: $email, password: $password, phone: $phone) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PET = gql`

mutation Mutation($input: PostInput!) {
  addPost(input: $input) {
    _id
    dateNeeded
    postText
    commentCount
    createdAt
    username
    comments {
      _id
      commentText
      createdAt
      username
    }
    pets {
      _id
      petName
    }
  }
}
`;

// export const ADD_POSTS = gql`
// mutation Mutation($input: PostInput!) {
//   addPost(input: $input) {
//     _id
//     postText
//     dateNeeded
//     createdAt
//     username
//   }
// }
// `
export const ADD_POSTS = gql`
mutation Mutation($input: PostInput!) {
  addPost(input: $input) {
    _id
    postText
    dateNeeded
    createdAt
    username
  }
}
`;
