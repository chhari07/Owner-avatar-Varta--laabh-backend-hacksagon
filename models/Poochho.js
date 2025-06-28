const mongoose = require('mongoose');

const PoochhoSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  question_type: {
    type: String,
    enum: ['text', 'poll', 'image', 'video'], // you can adjust allowed types
    default: 'text'
  },
  content: {
    type: String,
    default: ''
  },
  topics: {
    type: String,
    default: ''
  },
  tag_expert: {
    type: String,
    default: ''
  },
  verified_only: {
    type: Boolean,
    default: false
  },
  is_anonymous: {
    type: Boolean,
    default: false
  },
  poll_options: {
    type: [Object],
    default: []
  },
  attached_image: {
    type: String,
    default: ''
  },
  votes: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  comments: {
    type: [String],
    default: []
  },
  createdBy: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Poochho', PoochhoSchema);
