const Order = require('../models/Order.js');

class OrderController {
    async index(req, res) {
        const orders = await Order.find();
        return res.json({ orders });
    }
}

module.exports = new OrderController();