// package that allows connection to database
const mongoose = require("mongoose")

// Creates connection between Mongoose and the Scheema created
const Schema = mongoose.Schema

const ImageUpload = new Schema (
    {
        image: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('imageUpload', ImageUpload)