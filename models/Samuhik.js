const mongoose = require('mongoose');

const SamuhikSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: true
  },
  opinion: {
    type: String,
    required: true
  },
  articles: {
    type: String,
    default: ''
  },
  reference: {
    type: String,
    default: ''
  },
  docLink: {
    type: String,
    default: ''
  },
  imageURL: {
    type: String,
    default: ''
  },
  comments: {
    type: [String],
    default: []
  },
  votes: {
    type: [Object],
    default: []
  },
  createdBy: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Samuhik', SamuhikSchema);
