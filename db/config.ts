import newConfig_postgres from "../config/config_postgres";

const USER = encodeURIComponent(newConfig_postgres.dbUser);
const PASSWORD = encodeURIComponent(newConfig_postgres.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${newConfig_postgres.dbHost}:${newConfig_postgres.dbPort}/${newConfig_postgres.dbName}`;

const config = {
  development: {
    url: URI,
    dialect: "postgres",
  },
  production: {
    url: URI,
    dialect: "postgres",
  },
};

module.exports = config;
