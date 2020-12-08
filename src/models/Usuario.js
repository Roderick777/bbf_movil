const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    correo: String,
    fecha:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);