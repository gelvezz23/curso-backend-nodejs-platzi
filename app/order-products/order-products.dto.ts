import Joi from "joi";
const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amont = Joi.number().integer();

export const addItemDto = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amont.required(),
});

export const getItemDto = Joi.object({
  id: id.required(),
});
