// requiring User model into file
const User = require('../models/user')

// requiring jwt package into file
const jwt = require('jsonwebtoken')

const signIn = function(req,res){
    User.findOne({username: req.body.username}, (err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        if (!user || !user.comparePassword(req.body.password) ){
            res.status(400)
            return res.json({message: "Authentication failed"})
        }
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, _id: user._id},process.env.SECRET_KEY) })
    })
}

const loginRequired = function(req, res, next){
    if(req.user){
        next()
    }else{
        return res.status(401).json({message: "You are not authorised to do this"})
    }
}

const signOut = function (res) {
    res.cookie(jwt, '', { maxAge: 1 })
    res.redirect('/')
}


module.exports = {signIn, signOut, loginRequired}