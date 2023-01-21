import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'excel_analytics',
    port: 8889
});
console.log('DB connect')

export default db;
