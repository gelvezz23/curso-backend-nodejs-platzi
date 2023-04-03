import { config } from "dotenv";
config();

const newConfig_mysql = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.HEYHOTEL_PORT || 4000,
  dbUser: process.env.HEYHOTEL_DATABASE_USER || "admin",
  dbPassword: process.env.HEYHOTEL_DATABASE_PASSWORD || "root",
  dbHost: process.env.HEYHOTEL_DATABASE_HOST || "localhost",
  dbName: process.env.HEYHOTEL_DATABASE_NAME || "mydb",
  dbPort: process.env.HEYHOTEL_DATABASE_PORT_MYSQL || "3306",
};
export default newConfig_mysql;
