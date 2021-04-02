const mongoose = require('mongoose')

const periodoSchema = new mongoose.Schema({
  periodo: { type: String, required: [true, 'Debe ingresar el campo nombre' ] }
})

module.exports = mongoose.model('Usuario', periodoSchema)