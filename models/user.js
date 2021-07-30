// package that allows connection to database
const mongoose = require("mongoose")

// Creates connection between Mongoose and the Scheema created
const Schema = mongoose.Schema

// package to ensure password is stored in database with encryption
const bcrypt = require('bcrypt')

// Scheema for User
const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    hash_password:{
        type: String, 
        required: true
    },
    bio: {
        type: String,
        required: true
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

User.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('User', User)