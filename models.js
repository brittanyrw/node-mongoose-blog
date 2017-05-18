const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  author: {
    firstName: String,
    lastName: String
  },
  created: {}
});

postSchema.virtual('authorNameString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

postSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorNameString,
  };
}

const Post = mongoose.model('Post', postSchema);

module.exports = {Post};