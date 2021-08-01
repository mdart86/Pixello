// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// Requiring functions that sit within controllers
const {getPosts, newPost, getPost, removePost, changePost} = require('../controllers/postController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.get('/', getPosts)
router.get('/:id', getPost)


router.post('/', newPost)

router.delete('/:id', removePost)

router.put('/:id', changePost)


module.exports = router