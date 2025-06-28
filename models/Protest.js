const mongoose = require('mongoose');
const ProtestSchema = new mongoose.Schema({
  title: String,
  shortMessage: String,
  fullMessage: String,
  pollEnabled: Boolean,
  pollQuestion: String,
  option1: String,
  option2: String,
  tags: String,
  media: String,
  mediaType: String,
  documentLink: String,
  createdBy: String
}, { timestamps: true });
module.exports = mongoose.model('Protest', ProtestSchema);
