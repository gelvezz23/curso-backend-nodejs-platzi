import { Pool } from "pg";
import newConfig_mysql from "../../config/config_mysql";

const USER = encodeURIComponent(newConfig_mysql.dbUser);
const PASSWORD = encodeURIComponent(newConfig_mysql.dbPassword);

const URI = `mysql://${USER}:${PASSWORD}@${newConfig_mysql.dbHost}:${newConfig_mysql.dbPort}/${newConfig_mysql.dbName}`;
export const pool = new Pool({ connectionString: URI });
