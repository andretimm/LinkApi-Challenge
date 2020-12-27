const jsonToXML = require('jsontoxml');
const OrderModel = require('../models/Order.js')
const blingApi = require('../config/blingApi.js');
const { BLING_API_KEY } = require('../config/config.js');

class Order {
    async create(deals) {
        const orders = deals.map(async (deal) => {
            const xmlBling = jsonToXML(
                {
                    pedido: [
                        {
                            name: 'cliente',
                            children: [
                                {
                                    name: 'nome',
                                    text: deal.org_id.name
                                }
                            ]
                        },
                        {
                            name: 'volumes',
                            children: [
                                {
                                    name: 'volume',
                                    children: [
                                        {
                                            name: 'servico', text: 'digital'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'itens',
                            children: [
                                {
                                    name: 'item',
                                    children: [
                                        { name: 'codigo', text: 1 },
                                        { name: 'descricao', text: 'deal' },
                                        { name: 'qtde', text: 1 },
                                        { name: 'vlr_unit', text: deal.value },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                false
            );

            const orderResponse = await blingApi.post(
                `/pedido/json/&apikey=${BLING_API_KEY}&xml=${xmlBling}`
            );

            if (orderResponse.data.retorno.erros) {
                return {};
            } else {
                const { pedido } = orderResponse.data.retorno.pedidos[0];
                pedido.value = deal.value;
                pedido.org = deal.org_id.name;
                return pedido;
            }

        });

        const OrdersCreated = Promise.all(orders).then((resultOrderPromise) => {
            return resultOrderPromise;
        });
        return OrdersCreated;
    }

    async store(orders) {
        await orders.map(
            async ({ numero, idPedido, value, org }) => {
                if (numero) {
                    await OrderModel.create({
                        numero,
                        idPedido,
                        value,
                        org,
                    });
                }
            }
        );
    }

    async sortOrderByDate() {
        const orders = await OrderModel.find();
        return orders;
    }

}

module.exports = new Order();