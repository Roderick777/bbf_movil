const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: String,
    rut: String,
    nivel: Number,
    seccion: String,
    ensenanza: String,
    periodo: Number,
    idCurso: {type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    nombreCurso: String,
    nombreEstablecimiento: String,
    idEstablecimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento' },
    evaluaciones: Array,
    fecha: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Estudiante', schema)