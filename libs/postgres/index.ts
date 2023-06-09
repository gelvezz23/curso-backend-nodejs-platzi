import { Client } from "pg";
export const getConnection = async () => {
  const client = new Client({
    host: process.env.HEYHOTEL_URL || "localhost",
    port: Number(process.env.HEYHOTEL_DATABASE_PORT_POSTGRES || 5432),
    user: process.env.HEYHOTEL_DATABASE_USER,
    password: process.env.HEYHOTEL_DATABASE_PASSWORD,
    database: process.env.HEYHOTEL_DATABASE_NAME,
  });
  await client.connect();

  return client;
};
