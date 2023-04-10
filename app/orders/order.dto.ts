import Joi from "joi";

const id = Joi.number().integer();
const customerId = Joi.number().integer();

export const getOrderDto = Joi.object({
  id: id.required(),
});

export const createOrderDto = Joi.object({
  customerId: customerId.required(),
});
