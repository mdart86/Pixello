// requiring helper functions from Utils that query the database into the controller to be passed onto the routes
const {getAllUserPosts, getAllPostsOfUser, getUserPostById} = require('../utils/postsUtils')

// controller function to return all posts for all users
const getAllDatabasePosts = function (req, res){
    getAllUserPosts(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

// controller function to return all posts of user
const getPostsforUser = function (req, res){
    getAllPostsOfUser(req).exec((err, posts)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(posts)
    })
}

// controller function to return post by id
const getIndividualUserPost = function (req, res){
    getUserPostById(req.params.id).exec((err, post)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(post)
    })
}

// functions are exported to be used in post routes file
module.exports = {getAllDatabasePosts, getPostsforUser, getIndividualUserPost}