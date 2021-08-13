const {getUserById} = require('../utils/usersUtils')

const getUser = function (req, res){
    getUserById(req.params.id).exec((err, user)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(user)
    })
}

const getUserLabel = function (req, res){
    getUserById(req.params.id).exec((err, user)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send({username: user.username, avatarUrl: user.avatarUrl, id: user.id})
    })
}


module.exports = {getUser, getUserLabel}