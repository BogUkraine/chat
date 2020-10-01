const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port       : process.env.PORT,
    database   : process.env.DATABASE_NAME,
    dbUsername : process.env.DATABASE_USERNAME,
    dbPassword : process.env.DATABASE_PASSWORD,
    dbDialect  : process.env.DATABASE_DIALECT
}