const mongoose = require("mongoose")
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose')

const Post = new Schema({
    username: {
        type: String, 
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    caption: {
        type: String, 
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    category: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        required: false
    },
    imageId: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0,
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