const mongoose = require('mongoose');

const KaryaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['planned', 'in-progress', 'completed', 'on-hold'],
    default: 'planned'
  },
  team: {
    type: [Object],
    default: []
  },
  tasks: {
    type: [Object],
    default: []
  },
  progressLogs: {
    type: [Object],
    default: []
  },
  createdBy: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Karya', KaryaSchema);
