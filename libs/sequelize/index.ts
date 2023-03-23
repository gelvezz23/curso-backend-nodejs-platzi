import { Sequelize } from "sequelize";
import newConfig from "../../config/config";
import { setupUserModel } from "../../app/users/models";
const USER = encodeURIComponent(newConfig.dbUser);
const PASSWORD = encodeURIComponent(newConfig.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${newConfig.dbHost}:${newConfig.dbPort}/${newConfig.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: console.log,
});

setupUserModel(sequelize);
sequelize.sync({ logging: console.log });
