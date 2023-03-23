import { Pool } from "pg";
import newConfig from "../../config/config";

const USER = encodeURIComponent(newConfig.dbUser);
const PASSWORD = encodeURIComponent(newConfig.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${newConfig.dbHost}:${newConfig.dbPort}/${newConfig.dbName}`;
export const pool = new Pool({ connectionString: URI });
