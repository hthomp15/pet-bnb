const { User, Pet } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        },
        pets: async () => {
            return Pet.find()
        },
        pet: async (parent, { petName }) => {
            return Pet.findOne({ petName })
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
        },
        addPet: async (parent, args) => {
            const pet = await Pet.create(args.input)

            return pet
        },
        deletePet: async (parent, args) => {
            const pet = await Pet.findOneAndDelete({ _id: args._id })

            return pet
        },
        updatePet: async (parent, args) => {
            const pet = await Pet.findByIdAndUpdate(args._id, args.input, { new: true })
            return pet
        }
    }
}

module.exports = resolvers