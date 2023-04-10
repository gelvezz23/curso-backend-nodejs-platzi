import { Sequelize } from "sequelize";
import { OrderProduct, OrderProductModel } from "./order-products.model";

export const setupOrderProductsModel = (sequelize: Sequelize): void => {
  OrderProduct.init(OrderProductModel, OrderProduct.config(sequelize));
  OrderProduct.associate();
};
