const { User, Pet, Post } = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { _id }) => {
            return User.findOne({ _id })
        },
        pets: async () => {
            return Pet.find()
        },
        pet: async (parent, { _id }) => {
            return Pet.findOne({ _id })
        },
        posts: async () => {
            return Post.find()
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
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
        },
        addPost: async (parent, args) => {
            const post = await Post.create(args.input)

            return post
        },
        deletePost: async (parent, args) => {
            const post = await Post.findOneAndDelete({ _id: args._id })

            return post
        },
        updatePost: async (parent, args) => {
            const post = await Post.findByIdAndUpdate(args._id, args.input, { new: true })
            return post
        }
    }
}

module.exports = resolvers