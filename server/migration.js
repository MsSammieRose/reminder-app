const mysql = require('mysql');
const migration = require('mysql-migrations');

const {
    MYSQL_HOST,
    MYSQL_USER, 
    MYSQL_PASSWORD, 
    MYSQL_DB,
} = process.env;

const connection = mysql.createPool({
    connectionLimit: 10,
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB,
});

migration.init(connection, __dirname + '/migrations');
