const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    periodo: Number,
    idAsignatura: {type: mongoose.Schema.Types.ObjectId, ref: 'Asignatura' },
    idCurso: {type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    idEstablecimiento: {type: mongoose.Schema.Types.ObjectId, ref: 'Establecimiento' },
    idLibroNotaMes: {type: mongoose.Schema.Types.ObjectId, ref: 'LibroNotaMes' },
    porcentaje: Number,

    revisiones: [{
        nota: Number,
        porcentajeLogro: Number,
        rutEstudiante: String,
        nombreEstudiante: String,
        idUsuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
        idEstudiante: {type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' },
    }],

    fecha: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Evaluacion', schema)