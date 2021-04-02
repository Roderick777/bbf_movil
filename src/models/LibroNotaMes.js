const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    idAsignatura: {type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura' },
    periodo: Number,
    idCurso: {type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    idEstablecimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento' },
    idUsuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
    evaluaciones: Array,
    mes: String,
    fecha: { type: Date, default: Date.now },
})

module.exports = mongoose.model('LibroNotaMes', schema)