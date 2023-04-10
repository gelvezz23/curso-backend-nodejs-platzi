import { Sequelize } from "sequelize";
import { Order, orderModel } from "./order.model";

export const setupOrderModel = (sequelize: Sequelize): void => {
  Order.init(orderModel, Order.config(sequelize));
  Order.associate();
};
