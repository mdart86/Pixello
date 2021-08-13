// requiring helper functions from Utils that query the database into the controller to be passed onto the routes
const {getUserById} = require('../utils/usersUtils')

// controller function to get user by id
const getUser = function (req, res){
    getUserById(req.params.id).exec((err, user)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(user)
    })
}

// controller function to get user by id but only sending username, avatarUrl and id into database
const getUserLabel = function (req, res){
    getUserById(req.params.id).exec((err, user)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send({username: user.username, avatarUrl: user.avatarUrl, id: user.id})
    })
}

// functions are exported to be used in user routes file
module.exports = {getUser, getUserLabel}