const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email address'],
  },
  role: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User',
  },
  // avatar: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  // confirmPassword: {
  //   type: String,
  //   required: true,
  //   validate: {
  //     validator: function (value) {
  //       return value === this.confirmPassword;
  //     },
  //     message: 'Both passwords are not same',
  //   },
  // },
  changedPasswordAt: Date,
  resetPasswordToken: String,
  resetTokenExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

user.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

user.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.changedPasswordAt = Date.now() - 1000;
  next();
});

user.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

user.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

user.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (this.changedPasswordAt) {
    const changedPassword = parseInt(
      this.candidatePassword.getTime() / 1000,
      10
    );
    return changedPassword > JWTTimeStamp;
  }
  return false;
};

user.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.resetTokenExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
module.exports = mongoose.model('User', user);
