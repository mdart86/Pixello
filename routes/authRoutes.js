// requiring express into router file
const express = require('express')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

// Configured express router
const router = express.Router()
// let multer = require('multer')
// let multParse = multer()

// Requiring functions that sit within controllers
const {signUp, signIn} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

// router.route("/")
router.post('/sign_up', upload.single('image'), async (req, res, next) => {
        try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new user
            let newUser = new User({
                username: req.body.username,
                email: req.body.email,
                bio: req.body.bio,
                hash_password: bcrypt.hashSync(req.body.password, 10),
                avatar: result.secure_url,
                imageUrl: result.public_id,
            });
        // Save user
        await newUser.save();
        res.json(newUser, "Image upload successful");
        } 
        // error received
        catch (err) {
        console.log(err, "Image upload unsuccessful");
        }
        next()
}, signUp); 

// router.post('/sign_up', signUp)

router.post('/sign_in', signIn)

module.exports = router