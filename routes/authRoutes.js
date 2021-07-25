const express = require('express')
const router = express.Router()

const {signUp, signIn} = require('../controllers/authController')

router.post('/sign_up', signUp)
router.post('/sign_in', signIn)

module.exports = router