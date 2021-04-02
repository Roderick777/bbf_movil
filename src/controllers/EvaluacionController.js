const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const Evaluacion = require('../models/Evaluacion')
const EvaluacionService = require('../services/Evaluacion.service')

class EvaluacionController {
  static async crear({ req, res}) {
    const evaluacion = await EvaluacionService.crearEvaluacion({ req })
    res.status(200).json(evaluacion)
  }

  static async listaEvaluacionesMes({ req, res }) {
    const lista = await EvaluacionService.listaEvaluacionesMes({ req, res })
    return lista
  }
}

module.exports = EvaluacionController