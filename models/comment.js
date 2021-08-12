const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose')

const Comment = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  type: String,
  userId: {
    type: String,
    ref: 'user'
  },
  postId: {
    type: String,
    ref: 'post'
  }
});

module.exports = mongoose.model("Comment", Comment)