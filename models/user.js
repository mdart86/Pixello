// package that allows connection to database
const mongoose = require("mongoose")

// package that enables the application to refer to id instead of _id in the application
const normalize = require('normalize-mongoose')

// Creates connection between Mongoose and the Scheema created
const Schema = mongoose.Schema

// package to ensure password is stored in database with encryption
const bcrypt = require('bcrypt')

// Scheema for User
const User = new Schema({
    // username, type is string and is required, it is created based on what the user enters, it has a min-length of 3 characters and a max-length of 30. A trim is used to remove any whitespace on the end. It also has a unique key to ensure no duplication.
    username:{
        type: String,
        required: true,
        unique: true, 
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    // email, type is string and is required, it is created based on what the user enters, it has a min-length of 3 characters and a max-length of 50. A trim is used to remove any whitespace on the end. It also has a unique key to ensure no duplication.
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 75
    }, 
    // the password is stored in the database as a hash password to ensure encryption. It is a required element of every profile and is a string.
    hash_password:{
        type: String, 
        required: true
    },
    // bio, of a persons profile, type of string and is required. It has a min-length of 3 characters and a max-length of 200. A trim is used to remove any whitespace at the end
    bio: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 200
    },
    // avatarUrl is stored in the post as a way of showing the photo to the user. This URL is returned from Cloudinary after the image is saved.
    avatarUrl: {
        type: String,
        required: false
    },
    // imageId is stored in the post as a way of linking the post's photo to the Cloudinary. It is the id that is returned from Cloudinary after the image is saved.
    imageId: {
        type: String,
        required: false
    },
    // this is to allow an Admin role in our user databse. A boolean is used to minimise any typing errors in the code, it is required but yet defaulted to false as everyone can't be an Admin
    isAdmin: {
        type: Boolean, 
        default: false,
        required: true
    }
})

// the User plugin function allows for the normalize package to be used against this model
User.plugin(normalize)

// this function will allow the controller/routes to compare the password stored securely in the database to ensure a match before signing-in.
User.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password)
}

// scheema is exported, allowing it to be used in other areas of the application such as the utils, controllers and routes
module.exports = mongoose.model('User', User)