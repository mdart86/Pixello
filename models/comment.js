// requires Mongoose package for database queries
const mongoose = require('mongoose');

// Variable to initiate the scheema using the Mongoose.Scheema function
const Schema = mongoose.Schema;

// Comment scheema
const Comment = new Schema({
  // comment, type is string, it is required with a min-length of 3 characters and a max-length of 75
  comment: {
    type: String,
    requird: true,
    trim: true,
    minlength: 3,
    maxlength: 75
  },  
  // username, type is string and is required, it allows us to know which user has made the comment
  username: {
    type: String, 
    required: true,
  },
  // postId, type is string and is required, this is used to link a comment to a post
  postId: {
    type: String,
    requird: true
  },
  // created_at is used to record when the post is created
  created_at: {
    type: Date,
    required: false
  }
});

// scheema is exported, allowing it to be used in other areas of the application such as the utils, controllers and routes
module.exports = mongoose.model("Comment", Comment)