const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose')

const Comment = new Schema({
  comment: {
    type: String,
    requird: true,
    minlength: 3,
    maxlength: 75
  },  
  userId: {
    type: String,
    requird: true
  },
  postId: {
    type: String,
    requird: true
  },
  created_at: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model("Comment", Comment)