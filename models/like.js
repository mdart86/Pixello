const mongoose = require("mongoose")
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const Likes = new Schema({
    likes: {
        type: Number,
        default: 0,
        required: true
    }
})

Likes.plugin(normalize)
module.exports = mongoose.model("Likes", Likes)