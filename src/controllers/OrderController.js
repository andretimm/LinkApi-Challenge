const lib = require('pipedrive');
const Order = require('../services/Order.js');

class OrderController {
    async index(req, res) {
        try {
            let deal = await lib.DealsController.getAllDeals({ status = 'won' });
            if (!deal) {
                return res.status(400).json({ message: 'Envie um status válido' });
            }

            const dealsWon = deal.data;
            const orders = await Order.create(dealsWon);

            await Order.store(orders);

            return res.json(await Order.sortOrderByDate());
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async webhook(req, res) {
        //TODO
        return res.json({ ok: 1 });
    }
}

module.exports = new OrderController();