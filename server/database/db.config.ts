import mysql from "mysql2/promise";
import type { Pool, PoolOptions } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const config: PoolOptions = {
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
};

export const db: Pool = mysql.createPool(config);
