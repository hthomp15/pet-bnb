const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Post {
        _id: ID
        postText: String
        email: String
        createdAt: String
        username: String
        comments: [Comment]
    }

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
    }

    type Query {
        users: [User]
        user(username: String!): Pet

        pets: [Pet]
        pet(petName: String!): Pet
    }

    # create common input fields for mutations
    input UserInput {
        username: String
        email: String
        password: String
    }

    input PetInput {
        petName: String
        petType: String
        petNotes: String
    }

    type Mutation {
        addUser(input: UserInput!): User
        deleteUser(_id: ID!): User
        updateUser(_id: String!, input: UserInput!): User

        addPet(input: PetInput!): Pet
        deletePet(_id: ID!): Pet
        updatePet(_id: String!, input: PetInput!): Pet
    }

`

module.exports = typeDefs