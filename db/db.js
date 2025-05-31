import mysql from "mysql2";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Jatin.8889',
    database: 'customer_management_system',

});
export default pool;