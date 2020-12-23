const express = require("express");
const routes = require("./routes.js");

require('./config/database.js');

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;