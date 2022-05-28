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

export const QUERY_USER = gql`
query Query($id: ID!) {
  user(_id: $id) {
    _id
    username
    email
    password
    phone
    posts {
      _id
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
    }
    pets {
      _id
      petName
      petType
      petNotes
      username
    }
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    email
    password
    phone
  }
}
`;

export const QUERY_POSTS = gql`
query Query {
  posts {
    _id
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
  }
}
`;

export const QUERY_POST = gql`
query Query($id: ID!) {
  post(_id: $id) {
    _id
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
  }
}
`;

export const QUERY_USER_PETS = gql`
query Query($id: ID!) {
  user(_id: $id) {
    _id
    username
    pets {
      petName
      _id
      petType
      petNotes
      username
    }
  }
}
`;