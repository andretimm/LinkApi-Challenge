const axios = require('axios');
const config = require('./config.js');

const blingApi = axios.create({
    baseURL: `${config.URL_BLING}`,
    timeout: 1000,
});

module.exports = blingApi;
