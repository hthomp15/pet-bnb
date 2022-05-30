const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        phone: String
        posts: [Post]
        pets: [Pet]
    }

    type Post {
        _id: ID
        postText: String
        commentCount: Int
        dateNeeded: String
        createdAt: String
        username: String
        comments: [Comment]
    }
    # comments are subdocuments of posts
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
    }
    type Pet {
        _id: ID
        petName: String
        petType: String
        petNotes: String
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    # create common input fields for mutations
    input UserInput {
        username: String
        email: String
        password: String
        phone: String
    }

    input PetInput {
        petType: String
        petNotes: String
        petName: String
    }

    input PostInput {
        postText: String
        username: String  
        dateNeeded: String
    }

    input CommentInput {
        commentText: String
        username: String
    }

    type Query {
        me: User

        users: [User]
        user(username: String!): User

        pets: [Pet]
        pet(_id: ID!): Pet

        posts: [Post]
        post(_id: ID!): Post

        comments: [Comment]
        comment(_id: ID!): Comment
    }

    type Mutation {
        # addUser(input: UserInput!): Auth
        addUser(username: String!, email: String!, password: String!, phone: String!): Auth
        login(email: String!, password: String!): Auth
        deleteUser(_id: ID!): User
        updateUser(_id: String!, input: UserInput!): User

        addPet(input: PetInput!): Pet
        deletePet(_id: ID!): Pet
        updatePet(_id: String!, input: PetInput!): Pet

        addPost(input: PostInput!): Post
        deletePost(_id: ID!): Post
        updatePost(_id: String!, input: PostInput!): Post
        addComment(postId: ID!, commentText: String!): Post
    }

`

module.exports = typeDefs