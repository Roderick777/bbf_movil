const mongoose = require('mongoose')

const asignaturaSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Debe ingresar el campo nombre' ] },
});

module.exports = mongoose.model('Asignatura', asignaturaSchema);