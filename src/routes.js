const routes = require("express").Router();
const OrderController = require("./controllers/OrderController.js");


routes.get('/', OrderController.index);
//routes.get('/webhook', OrderController.webhook);

module.exports = routes;