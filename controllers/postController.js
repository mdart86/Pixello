const {getAllUserPosts, getAllPostsOfUser, getUserPostById, deletePost} = require('../utils/postsUtils')

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

// controller function to delete post of user
const removePost = function(req, res){
    deletePost(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })
}

module.exports = {getAllDatabasePosts, getPostsforUser, getIndividualUserPost, removePost}