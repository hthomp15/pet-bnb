const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        users: [User]
        user(username: String!): User
    }

    # create common input fields for mutations
    input UserInput {
        username: String
        email: String
        password: String
    }

    type Mutation {
        addUser(input: UserInput!): User
        deleteUser(_id: ID!): User
        # updateUser(_id: String!): User
    }

`

module.exports = typeDefs