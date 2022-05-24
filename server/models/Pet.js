const { Schema, model } = require('mongoose')

const petSchema = new Schema(
    {
        petName: {
            type: String,
            required: true,
            trim: true
        },
        petType: {
            type: String,
            required: true,
        },
        petNotes: {
            type: String,
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Pet = model('Pet', petSchema)

module.exports = Pet