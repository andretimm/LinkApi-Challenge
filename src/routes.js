const routes = require("express").Router();
const OrderController = require("./controllers/OrderController.js");


routes.get('/', OrderController.index);

module.exports = routes;