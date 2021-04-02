const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const jwt_decode = require('jwt-decode')

const LibroNotaMes = require('../models/LibroNotaMes')
const Establecimiento = require('../models/Establecimiento')
const EvaluacionService = require('../services/Evaluacion.service')
const Evaluacion = require('../models/Evaluacion')
const Estudiante = require('../models/Estudiante')

class LibroNotaMesController {
  static async guardar ({req, res}) {
    const idLibroNotaMes = req.body.idLibroNotaMes
    if (idLibroNotaMes == null) {
      await this.crear(req, res)
    } else {
      await this.actualizar({ req, res })
    }
  }

  static async crear (req, res) {
    const token = jwt_decode(req.body.token)
    const establecimiento = await Establecimiento.findById(token.usuario.config.establecimiento)
    const nuevoLibroNotaMes = await LibroNotaMes.create({
      idAsignatura: req.body.asignatura._id,
      periodo: req.body.periodo,
      idCurso: req.body.curso._id,
      idEstablecimiento: establecimiento._id,
      idUsuario: token.usuario._id,
      evaluaciones: [],
      mes: req.body.mes
    })
    req.body.idLibroNotaMes = nuevoLibroNotaMes._id

    for (let posicion = 0; posicion < req.body.cantidadEvaluaciones; posicion ++) {
      const evaluacion = await EvaluacionService.crearEvaluacion({ req, posicion })
    }

    res.status(200).json(nuevoLibroNotaMes)
  }

  static async actualizar ({ req, res }) {
    const respuesta = await EvaluacionService.actualizarEvaluacion({ req })
    res.status(200).json(respuesta)
  }

  static async getLibroNotaMes({ req, res}) {
    const datos = await LibroNotaMes.find({
      idAsignatura: req.query.idAsignatura,
      periodo: req.query.periodo,
      idCurso: req.query.idCurso
    })
    const evaluaciones = await Evaluacion.find({ idLibroNotaMes: ObjectId(datos[0]._id) })


    const idCurso = req.query.idCurso
    let estudiantes = await Estudiante.find({ idCurso }).exec()
    let i = 0
    for(const elemento of estudiantes ) {
      estudiantes[i].evaluaciones = this.dummyEvaluaciones(4)
      i++
    }


    
    datos[0].evaluaciones = evaluaciones
    res.status(200).json(datos)
  }
}

module.exports = LibroNotaMesController