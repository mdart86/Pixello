const User = require ('../models/user')

// Helper function to get user profile by id
const getUserById = function (id){
    return User.findById(id)
}

const getUserNameAndAvatar = function (req, id){
    return Post.findById(id, ({username: req.user.username, avatarUrl: req.user.avatarUrl}))
  }

module.exports = {getUserById, getUserNameAndAvatar}