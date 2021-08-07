const User = require ('../models/user')

// Helper function to get user profile by id
const getUserById = function (id){
    return User.findById(id)
}

module.exports = {getUserById}