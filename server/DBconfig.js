const dotenv = require('dotenv');
dotenv.config();


const { Pool } = require('pg');
const poolItems = new Pool({
    // connectionString: process.env.DBConfigLink,
    // ssl: {
    //     rejectUnauthorized: false
    // },
    // user: process.env.DB_USER,
    // host: process.env.DB_HOST,
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
    // port: process.env.DB_PORT,
    connection: process.env.DATABASE_URL,
});
module.exports = poolItems;
