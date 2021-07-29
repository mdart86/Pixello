const mongoose = require("mongoose")
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const Post = new Schema({
    username: {
        type: String, 
        required: true
    },
    caption: {
        type: String, 
        required: true
    },
    likes: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    modified_at: {
        type: Date,
        required: true
    }
})
Card.plugin(normalize)
module.exports = mongoose.model("Post", Post)