const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
    name: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    identity: String,
    text: String,
    date:{ type: Date, default: Date.now },
    activo: { type: Boolean, dafault: true }
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);
module.exports = Mensaje;