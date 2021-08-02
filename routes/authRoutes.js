// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// Requiring functions that sit within controllers
const {signUp, signIn} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 



// router.route("/")
router.post("/", upload.single("image"), async (req, res, next) => {
        try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new user
            let user = new User({
                name: req.body.name,
                avatar: result.secure_url,
                imageUrl: result.public_id,
            });
        // Save user
        await user.save();
        res.json(user, "Image upload successful");
        } 
        // error received
        catch (err) {
        console.log(err, "Image upload unsuccessful");
        }
        next()
}); 

router.post('/sign_up', signUp)

router.post('/sign_in', signIn)

module.exports = router