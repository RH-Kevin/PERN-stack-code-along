const dotenv = require('dotenv');
dotenv.config();


const { Pool } = require('pg');
const poolItems = new Pool({
    connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = poolItems;
