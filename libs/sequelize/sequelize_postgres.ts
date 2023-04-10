import { Sequelize } from "sequelize";
import newConfig_postgres from "../../config/config_postgres";
import { setupUserModel } from "../../app/users/models";
import { setupCustomerModel } from "../../app/customer/models";
import { setupProductsModel } from "../../app/products/models";
import { setupCategoryModel } from "../../app/categories/models";
import { setupOrderModel } from "../../app/orders/models";
import { setupOrderProductsModel } from "../../app/order-products/models";

const USER = encodeURIComponent(newConfig_postgres.dbUser);
const PASSWORD = encodeURIComponent(newConfig_postgres.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${newConfig_postgres.dbHost}:${newConfig_postgres.dbPort}/${newConfig_postgres.dbName}`;

export const sequelize_postgres = new Sequelize(URI, {
  dialect: "postgres",
  logging: console.log,
});

setupUserModel(sequelize_postgres);
setupCustomerModel(sequelize_postgres);
setupCategoryModel(sequelize_postgres);
setupProductsModel(sequelize_postgres);
setupOrderModel(sequelize_postgres);
setupOrderProductsModel(sequelize_postgres);
