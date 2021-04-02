const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    correo: String,
    clave: String,
    fecha: { type: Date, default: Date.now },
    avatar: String,
    rol: String,
    config: {
      tipoTrimestre: Object, 
      periodoElegido: Object,
      evaluaciones: Object,
      establecimiento: Object,
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);