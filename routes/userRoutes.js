const express = require('express')
const router = express.Router()

const {getUser, removeUser, changeUser} = require('../controllers/userController')
const {loginRequired} = require('../controllers/authController')

router.use(loginRequired)

router.get('/:id', getUser)

router.delete('/:id', removeUser)

router.put('/:id', changeUser)


module.exports = router