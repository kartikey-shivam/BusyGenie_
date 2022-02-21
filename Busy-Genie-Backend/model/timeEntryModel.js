const mongoose = require('mongoose');

const timeEntry = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  precedence: {
    type: String,
    default: 'orange',
  },
  start: {
    type: Date,
    default: new Date(),
  },
  // project: String,
  // categories: String,
  // startTime: Date,
  // endTime: Date,
  // userId: String,
  dateOfFinalization: {
    type: Date,
    required: true,
  },
  comment: String,
  markAsDone: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('TimeEntry', timeEntry);
