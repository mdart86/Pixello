// requiring express into router file
const express = require('express')

// requiring User model into file
const User = require('../models/user')

// requiring jwt and bcrypt packages into file
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Configured express router
const router = express.Router()

// Requiring functions that sit within controllers
const {signIn, signOut} = require('../controllers/authController')

// requiring files within utils folder - this middleware assists with image uploads to Cloudinary
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

// router function to sign in and post to cloudinary
router.post('/sign_up', upload.single('image'), async (req, res) => {
    try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user which is stored in a variable - passes body dictated by the model with other variables passed to once received
    const newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10) // password is encrypted as a hash password
    newUser.avatarUrl = result.secure_url // URL retrieved from Cloudinary
    newUser.imageId = result.public_id // ID retrieved from Cloudinary
    // Save user
    await newUser.save((err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        console.log("Image upload successful")
        // returns the username, user ID and JWT which is assigned to the parameteres in the function
        return res.json({username: user.username, _id:user._id, jwt: jwt.sign({username: user.username, email: user.email, imageId: user.imageId, bio: user.bio, _id: user._id},process.env.SECRET_KEY, { expiresIn: 1800 }) })
    });
    } 
    // error received
    catch (err) {
    console.log(err, "Image upload unsuccessful");
    }
}); 

// router function to sign in linking to controller function
router.post('/sign_in', signIn)

// router function to signout which will kill the user session
router.get('/sign_out', signOut)

// router exported to app.js file for app to use
module.exports = router