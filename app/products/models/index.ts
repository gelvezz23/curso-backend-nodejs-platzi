import { Sequelize } from "sequelize";
import { Products, productModel } from "./product.model";

export const setupProductsModel = (sequelize: Sequelize): void => {
  Products.init(productModel, Products.config(sequelize));
  Products.associate();
};
