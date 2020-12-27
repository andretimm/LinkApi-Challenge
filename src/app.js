const express = require("express");
const cors = require('cors')
const routes = require("./routes.js");

require('./config/database.js');

class App {
    constructor() {
        this.server = express();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;