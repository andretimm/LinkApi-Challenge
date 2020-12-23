const mongoose = require("mongoose");

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(
            'mongodb+srv://andre:linkapi@cluster0.ewhmp.mongodb.net/linkapi?retryWrites=true&w=majority',
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