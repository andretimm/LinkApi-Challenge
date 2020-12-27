const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
    {
        numero: {
            type: String,
            required: true,
        },
        idPedido: {
            type: Number,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        org: {
            type: String,
            required: true,
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Orders', Orders);