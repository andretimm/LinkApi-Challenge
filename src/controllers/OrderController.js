//const Order = require('../models/Order.js');
const lib = require('pipedrive');
class OrderController {
    async index(req, res) {
        const { status = 'won' } = req.query;
        let deal = await lib.DealsController.getAllDeals({ status });
        if (!deal) {
            return res.status(400).json({ message: 'Envie um status válido' });
        }

        const dealsWon = deal.data;

        return res.json(dealsWon);
    }

    async webhook(req, res) {
        //TODO
        return res.json({ ok: 1 });
    }
}

module.exports = new OrderController();