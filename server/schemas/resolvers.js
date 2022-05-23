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
            const user = await User.create(args.input)

            return user
        },
        deleteUser: async (parent, args) => {
            const user = await User.findOneAndDelete({ _id: args._id })

            return user
        },
        updateUser: async (parent, args) => {
            const user = await User.findByIdAndUpdate(args._id, args.input, { new: true })
            return user
        }
    }
}

module.exports = resolvers