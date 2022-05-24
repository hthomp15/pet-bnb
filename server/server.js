const express = require('express')
const db = require('./config/connection')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app })

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`)
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })
}

startApolloServer(typeDefs, resolvers)