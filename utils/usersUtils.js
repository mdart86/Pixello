const User = require ('../models/user')

// Helper function to get user profile by id
const getUserById = function (id){
    return User.findById(id)
}

// // Helper function to delete user profile by id
// const deleteUser = function(id){
//     return User.findByIdAndRemove(id)
// }

module.exports = {getUserById}