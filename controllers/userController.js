const {getUserById, updateUser, deleteUser} = require('../utils/usersUtils')

const getUser = function (req, res){
    getUserById(req.params.id).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(post)
    })
}

const removeUser = function(req, res){
    deleteUser(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })
}

const changeUser = function(req,res){
    updateUser(req).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(post)
    })
}

module.exports = {getUser, removeUser, changeUser}