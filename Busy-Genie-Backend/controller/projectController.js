const Project = require('../model/projectModel');
const ApiFeatures = require('../utils/apiFeatues');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Project.find(), req.query)
    .filter()
    .sort()
    .limit()
    .page();
  const project = await features.query;

  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new AppError(`There is no project with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const project = await Project.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!project) {
    return next(
      new AppError(`There is no project with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    data: {
      project,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return next(
      new AppError(`There is no project with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    data: null,
  });
});
