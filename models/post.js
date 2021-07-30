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
        default: 0,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: false
    },
    modified_at: {
        type: Date,
        required: false
    }
})
Post.plugin(normalize)
module.exports = mongoose.model("Post", Post)