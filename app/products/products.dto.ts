import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(2);
const priceMin = Joi.number().integer();
const priceMax = Joi.number().integer();

const description = Joi.string().min(10);
const image = Joi.string();
const categoryId = Joi.number().integer();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

export const createProductDto = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

export const updateProductDto = Joi.object({
  name,
  price,
  image,
  description,
  categoryId,
});

export const getProductDto = Joi.object({
  name,
  price,
  image,
});

export const getProductDtoById = Joi.object({
  id: id.required(),
});

export const getQueryProductDto = Joi.object({
  limit,
  offset,
  price,
  priceMin,
  priceMax: priceMax.when("priceMin", {
    is: Joi.number().integer(),
    then: Joi.required(),
  }),
});

export const deleteProductDto = Joi.object({
  id: id.required(),
});
