const User = require ('../models/user')

// Helper function to get user profile by id
const getUserById = function (id){
    return User.findById(id)
}

// Helper function to delete user profile by id
const deleteUser = function(id){
    return User.findByIdAndRemove(id)
}

// // Helper function to update user profile by id
// const updateUser = function(req){
//     req.body.modified_at = Date.now()
//     //new: true will return the updated card
//     return User.findByIdAndUpdate(req.params.id, req.body, {new: true})
// }

module.exports = {getUserById, deleteUser}