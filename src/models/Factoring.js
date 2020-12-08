const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tipo: { type: String, required: [true, 'Debe ingresar el campo tipo' ] },
    cantidad: { type: Number, default: 0 },
    monto:{ type: Number, default: 0 }
});

module.exports = mongoose.model('Factoring', schema)