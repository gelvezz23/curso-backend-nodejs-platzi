import Joi from "joi";

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(2);
const image = Joi.string();

export const createProductDto = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

export const updateProductDto = Joi.object({
  name: name,
  price: price,
  image: image,
});

export const getProductDto = Joi.object({
  name: name,
  price: price,
  image: image,
});

export const getProductDtoById = Joi.object({
  id: id.required(),
});

export const deleteProductDto = Joi.object({
  id: id.required(),
});
