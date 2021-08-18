// requiring User model into file
const User = require('../models/user')

// requiring jwt package into file
const jwt = require('jsonwebtoken')

// sign-in function that will catch an error
const signIn = function(req,res){
    User.findOne({username: req.body.username}, (err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        // authentication aka sign-in will fail if it is not the user OR the password is not the same
        if (!user || !user.comparePassword(req.body.password) ){
            res.status(400)
            return res.json({message: "Authentication failed"})
        }
        // it will return in JSON format, the username, user id and the JWT. The JWT will expire in 1800 seconds/30 minutes
        return res.json({username: user.username, _id: user._id, jwt: jwt.sign({username: user.username, _id: user._id},process.env.SECRET_KEY, { expiresIn: 1800 })})
    })
}

// used in all routes files to ensure a user is logged-in before routes functions happen
const loginRequired = function(req, res, next){
    if(req.user){
        next()
    }else{
        return res.status(401).json({message: "You are not authorised to do this"})
    }
}

// signout function, will catch any errors otherwise it wil process which will destroy the user session and redirect to the root route
const signOut = function (req, res, err) {
    if(err){
        res.status(400)
        return res.json({error: err.message})
    }
    else {
        req.session.destroy (() => {
            res.redirect('/');
        })
    }
}

// functions are exported to be used in auth routes file, except for loginRequired function which will be used more widely, in all routes files
module.exports = {signIn, signOut, loginRequired}