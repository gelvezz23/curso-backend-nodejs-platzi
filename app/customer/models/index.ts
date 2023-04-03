import { Sequelize } from "sequelize";
import { Customer, customerModel } from "./customer.model";

export const setupCustomerModel = (sequelize: Sequelize): void => {
  Customer.init(customerModel, Customer.config(sequelize));
  Customer.associate();
};
