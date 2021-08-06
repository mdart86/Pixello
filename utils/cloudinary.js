require('dotenv').config()

// requires cloudinary package into file
const cloudinary = require('cloudinary')

// configures cloudinary with variable in dotenv file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_HOST,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// exports cloudinary config above
module.exports = cloudinary