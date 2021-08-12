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
    username:{
        type: String,
        required: true,
        unique: true, 
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    }, 
    hash_password:{
        type: String, 
        required: true
    },
    bio: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 200
    },
    avatarUrl: {
        type: String,
        required: false
    },
    imageId: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean, 
        default: false,
        required: true
    }
    // avatar: {
    //     type: String,
    //     required: true
    // }
    // Previously was implementing logic using a string however as the app requires only 2 admin roles a boolean is more suited 
    // as it has less room for error ie typing errors
    // role: {
    //     type: String,
    //     default: "user", 
    //     required: true
    // }
})

User.plugin(normalize)

User.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('User', User)