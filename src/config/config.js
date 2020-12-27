require('dotenv').config();

module.exports = {
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    PIPEDRIVE_API_KET: process.env.PIPEDRIVE_API_KET,
    BLING_API_KEY: process.env.BLING_API_KEY,
    URL_BLING: process.env.URL_BLING,
};