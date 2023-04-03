import { Sequelize } from "sequelize";
import newConfig_mysql from "../../config/config_mysql";
import { setupUserModel } from "../../app/users/models";
const USER = encodeURIComponent(newConfig_mysql.dbUser);
const PASSWORD = encodeURIComponent(newConfig_mysql.dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${newConfig_mysql.dbHost}:${newConfig_mysql.dbPort}/${newConfig_mysql.dbName}`;

export const sequelize_mysql = new Sequelize(URI, {
  dialect: "mysql",
  logging: console.log,
});

//setupUserModel(sequelize_mysql);
//sequelize_mysql.sync({ logging: console.log });
