const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: String,
    fono: { type: String, default: ''},
    correo: { type: String, default: ''},
    director: {type: String, default: ''},
    avatar: String,
    info: {
        director: String,
        telefonoContacto: String,
        correoContacto: String
    },
    fecha: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Establecimiento', schema)