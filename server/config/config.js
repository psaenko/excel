import mysql from "mysql2";
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});
console.log('DB connect')

export default db;
