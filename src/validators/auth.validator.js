const Joi = require('joi');

const emailSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
});

const registerSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
});
const registerVerificationSchema = Joi.object().keys({
  hashToken: Joi.string()
    .required(),
  otp: Joi.string()
    .min(6)
    .max(6)
    .required()
});
const loginSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
});
const resetPasswordSchema = Joi.object().keys({
  hashToken: Joi.string()
    .required(),
  password: Joi.string()
    .min(6)
    .max(30)
    .required(),
  confirmPassword: Joi.string()
    .min(6)
    .max(30)
    .required()
});

module.exports = {
  emailValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, emailSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
  registerValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, registerSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
  loginValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, loginSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
  registerVerificationValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, registerVerificationSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
  resetPasswordValidator(req) {
    const reqBody = req.body || req;
    return new Promise((resolve, reject) => Joi.validate(reqBody, resetPasswordSchema, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  }
};