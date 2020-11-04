const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const paisSchema = new Schema({
    id: { type: Number, dafault: 1 },
    name: { type: String, required: [true, 'Debe ingresar el campo nombre' ] }
});

const Pais = mongoose.model('pais', paisSchema);
module.exports = Pais;
