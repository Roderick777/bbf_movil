const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    enlace: String,
    icono: String,
    perfil: String
});

module.exports = mongoose.model('Menu', menuSchema);