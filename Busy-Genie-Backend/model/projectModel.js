const mongoose = require('mongoose');

const project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  estimatedTime: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Project', project);
