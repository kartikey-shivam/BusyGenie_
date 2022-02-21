const express = require('express');
const timeEntryController = require('../controller/timeEntryController');

const router = express.Router();

router
  .route('/')
  .get(timeEntryController.getAllTimeEntries)
  .post(timeEntryController.createTimeEntry);

router
  .route('/:id')
  .get(timeEntryController.getTimeEntry)
  .patch(timeEntryController.updateTimeEntry)
  .delete(timeEntryController.deleteTimeEntry);

module.exports = router;
