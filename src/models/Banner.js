const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
    Nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
    Descripcion: String,
    Posicion: Number,
    Archivo:{ type: String, default: '' },
    Url: { type: String, dafault: '' },
    Tipo_ID:{ type: Number, default: 1 },
    Estado: { type: Number, dafault: 1 }
});

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;
