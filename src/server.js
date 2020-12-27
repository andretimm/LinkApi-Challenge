const lib = require('pipedrive');
const app = require("./app.js");
const { PIPEDRIVE_API_KET } = require("./config/config.js");

lib.Configuration.apiToken = `${PIPEDRIVE_API_KET}`;

app.listen(4001)