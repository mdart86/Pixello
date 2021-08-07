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

module.exports = {getUser}