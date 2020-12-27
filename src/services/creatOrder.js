const jsonToXML = require('jsontoxml');
const blingApi = require('../config/blingApi.js');
const { BLING_API_KEY } = require('../config/config.js');

class Order {
    async create(deals) {
        deals.map(async (deal) => {
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

            const { pedido } = orderResponse.data.retorno.pedidos[0];
            pedido.value = deal.value;
            pedido.orgName = deal.org_id.name;
            console.log(pedido);
        });
    }
}

module.exports = new Order();