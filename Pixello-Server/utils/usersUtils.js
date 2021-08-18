// requires user scheema/model into file to allow helper functions to access data
const User = require ('../models/user')

// Helper function to get user profile by id
const getUserById = function (id){
    return User.findById(id)
}

// Helper functions are exported from this file and passed to the /controllers/userController.js
module.exports = {getUserById}