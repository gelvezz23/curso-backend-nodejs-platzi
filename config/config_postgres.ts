import { config } from "dotenv";
config();

const newConfig_postgres = {
  env: process.env.NODE_ENV || "development",
  port: process.env.HEYHOTEL_PORT || 4000,
  dbUser: process.env.HEYHOTEL_DATABASE_USER || "admin",
  dbPassword: process.env.HEYHOTEL_DATABASE_PASSWORD || "root",
  dbHost: process.env.HEYHOTEL_DATABASE_HOST || "localhost",
  dbName: process.env.HEYHOTEL_DATABASE_NAME || "mydb",
  dbPort: process.env.HEYHOTEL_DATABASE_PORT_POSTGRES || "5432",
};
export default newConfig_postgres;
