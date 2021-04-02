const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: String,
    nivel: Number,
    seccion: String,
    ensenanza: String,
    idEstablecimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento'},
    periodo: Number,
    fecha: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Curso', schema)