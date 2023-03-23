import Joi from "joi";

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();
//const role = Joi.string().min(5);

export const createUserDto = Joi.object({
  email: email.required(),
  password: password.required(),
  // role: role.required(),
});

export const updateUserDto = Joi.object({
  email: email,
  password: password,
  //role: role,
});

export const getUserDto = Joi.object({
  id: id.required(),
});
