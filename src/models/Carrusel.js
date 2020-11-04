const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const carruselSchema = new Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    imagen: String,
});

const Carrusel = mongoose.model('Carrusel', carruselSchema);
module.exports = Carrusel;
