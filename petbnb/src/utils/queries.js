import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Users {
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
    }
`;