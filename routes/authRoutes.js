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

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

// router function to sign in and post to cloudinary
router.post('/sign_up', upload.single('image'), async (req, res) => {
    try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new user
    const newUser = new User(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
    newUser.avatar = result.secure_url
    newUser.imageUrl = result.public_id
    console.log(newUser)
    // Save user
    await newUser.save((err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        console.log("Image upload successful")
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, email: user.email, imageUrl: user.imageUrl, bio: user.bio, _id: user._id},process.env.SECRET_KEY) })
    });
    } 
    // error received
    catch (err) {
    console.log(err, "Image upload unsuccessful");
    }
}); 

// router function to sign in linking to controller function
router.post('/sign_in', signIn)

router.get('/sign_out', signOut)

module.exports = router