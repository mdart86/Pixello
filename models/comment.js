const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose')

const Comment = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  type: String,
  author: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  post: {
    type: Schema.ObjectId,
    ref: 'post'
  }
});

module.exports = mongoose.model("Comment", Comment)