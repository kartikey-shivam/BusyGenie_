const TimeModel = require('../model/timeEntryModel');
const ApiFeatues = require('../utils/apiFeatues');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllTimeEntries = catchAsync(async (req, res, next) => {
  // const features = new ApiFeatues(TimeModel.find(), req.query)
  //   .filter()
  //   .sort()
  //   .limit()
  //   .page();
  // const timeEntry = await features.query;
  const timeEntry = await TimeModel.find();
  res.status(200).json(timeEntry);
});

exports.getTimeEntry = catchAsync(async (req, res, next) => {
  const timeEntry = await TimeModel.findById(req.params.id);
  if (!timeEntry) {
    return next(new AppError(`There is no entry for ${req.params.id}`, 404));
  }
  res.status(200).json(timeEntry);
});

exports.createTimeEntry = catchAsync(async (req, res, next) => {
  const timeEntry = await TimeModel.create(req.body);
  res.status(200).json(timeEntry);
});

exports.updateTimeEntry = catchAsync(async (req, res, next) => {
  const timeEntry = await TimeModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!timeEntry) {
    return next(new AppError(`There is no entry for ${req.params.id}`, 404));
  }
  res.status(200).json(timeEntry);
});

exports.deleteTimeEntry = catchAsync(async (req, res, next) => {
  const timeEntry = await TimeModel.findByIdAndDelete(req.params.id);
  if (!timeEntry) {
    return next(new AppError(`There is no entry for ${req.params.id}`, 404));
  }
  res.status(200).json({
    status: 'success',
    data: null,
  });
});
