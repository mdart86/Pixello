// requires Mongoose package for database queries
const mongoose = require('mongoose');

// Variable to initiate the scheema using the Mongoose.Scheema function
const Schema = mongoose.Schema;

// normalize package is used to allow ''_id'' to be used as ''id''
const normalize = require('normalize-mongoose')

// Post scheema
const Post = new Schema({
    // username, type is string and is required, it allows us to know which user has made the post
    username: {
        type: String, 
        required: true,
    },
    // userId, type is string and is required, it allows us to filter posts by the userId
    userId: {
        type: String, 
        required: true,
    },
    // caption, type of string and is required. It has a min-length of 3 characters and a max-length of 100. A trim is used to remove any whitespace at the end
    caption: {
        type: String, 
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100
    },
    // category, type of string and is required. It allows us to filter posts by category
    category: {
        type: String,
        required: true
    },
    // photoUrl is stored in the post as a way of showing the photo to the user. This URL is returned from Cloudinary after the image is saved.
    photoUrl: {
        type: String,
        required: false
    },
    // imageId is stored in the post as a way of linking the post's photo to the Cloudinary. It is the id that is returned from Cloudinary after the image is saved.
    imageId: {
        type: String,
        required: false
    },
    // likes is a number data type. It is defaulted to 0 and is required. It will be updated when a person likes each post.
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    // created_at is used to record when the post is created
    created_at: {
        type: Date,
        required: false
    },
    // modified_at is used to record when the post is updated
    modified_at: {
        type: Date,
        required: false
    }
})

// the Post plugin function allows for the normalize package to be used against this model
Post.plugin(normalize)

// scheema is exported, allowing it to be used in other areas of the application such as the utils, controllers and routes
module.exports = mongoose.model("Post", Post)