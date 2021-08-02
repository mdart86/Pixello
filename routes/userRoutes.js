// requiring express into router file
const express = require('express')

// Configured express router
const router = express.Router()

// Requiring functions that sit within controllers
const {getUser, removeUser, changeUser} = require('../controllers/userController')
const {loginRequired} = require('../controllers/authController')

// requiring files within utils file
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer') 

router.use(loginRequired)

router.get('/:id', getUser)

router.delete('/:id', removeUser)

router.put('/:id', changeUser)


module.exports = router