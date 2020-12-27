require('dotenv').config();
const mongoose = require("mongoose");
const config = require("./config.js");
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE } = config;

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(
            `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ewhmp.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        );
    }
}

module.exports = new Database();