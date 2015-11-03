var mongoose, Schema, SongSchema;
mongoose = require('mongoose');
Schema = mongoose.Schema;
var SongSchema = new Schema({
  dateCreation: { type: Date, default: Date.now },
  dateLastLogin: { type: Date, default: Date.now },
  userName: { type: String, required: 'User must have an username.'},
  firstName: String,
  lastName: String,
  canonicalName: String,
  salt: String,
  language: String
}, {
  collection: 'users'
});

module.exports = mongoose.model('Users', SongSchema);

