const { User } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)

            return user
        },
        deleteUser: async (parent, args) => {
            const user = await User.findOneAndDelete({ _id: args._id })

            return user
        }
    }
}

module.exports = resolvers