"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var paisSchema = new Schema({
  id: {
    type: Number,
    dafault: 1
  },
  name: {
    type: String,
    required: [true, 'Debe ingresar el campo nombre']
  }
});
var Pais = mongoose.model('pais', paisSchema);
module.exports = Pais;