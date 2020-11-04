const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    rut: { type: String, required: [true, 'Debe ingresar el campo Rut'] },
    correo: String,
    clave:{ type: String },
    fecha:{ type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;