import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(2);
const description = Joi.string().min(10);
const image = Joi.string();
const categoryId = Joi.number().integer();

export const createProductDto = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

export const updateProductDto = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId,
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
