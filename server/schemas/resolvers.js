const { User, Pet, Post } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

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
            // user will return _id, username, email
            const token = signToken(user)

            return { user, token }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            // check if email exists
            if (!user) {
                throw new AuthenticationError('Incorrect email address')
            }

            // check if password matches
            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password')
            }

            const token = signToken(user)
            return { user, token }
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
        },
        addComment: async (parent, args) => {
            const updatedPost = await Post.findOneAndUpdate(
                { _id: args.postId },
                { $push: { comments: { commentText: args.commentText, username: args.username } } },
                { new: true }
            )

            return updatedPost
        }
    }
}

module.exports = resolvers