const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const jwt_decode = require('jwt-decode')
const Establecimiento = require('../models/Establecimiento')
const Evaluacion = require('../models/Evaluacion')
const LibroNotaMes = require('../models/LibroNotaMes')

class EvaluacionService {
  /** @description Lista las evaluaciones correspondientes a un libto de noas por mes */
  static async listaEvaluacionesMes({ req, res }) {
    const idLibroNotaMes = req.query.idLibroNotaMes
    const lista = await Evaluacion.find({ idLibroNotaMes })
    return lista
  }

  static async crearEvaluacion({ req, posicion }) {
    const token = jwt_decode(req.body.token)
    const datos = req.body
    const revisiones = []
    const establecimiento = await this.getEstablecimiento(token.usuario)

    for (let i = 0; i < datos.estudiantes.length; i++) {
      const estudiante = datos.estudiantes[i]
      const evaluacion = estudiante.evaluaciones[posicion]
      revisiones.push({
        nota: evaluacion.nota,
        porcentajeLogro: null,
        rutEstudiante: estudiante.rut,
        nombreEstudiante: estudiante.nombre,
        idUsuario: token.usuario._id,
        idEstudiante: estudiante._id
      })
    }
  
    const body = {
      periodo: datos.periodo,
      idAsignatura: datos.asignatura._id,
      idCurso: datos.curso._id,
      idEstablecimiento: establecimiento._id,
      idLibroNotaMes: datos.idLibroNotaMes,
      porcentaje: datos.porcentaje || 25,
      revisiones    
    }
    const evaluacion = await Evaluacion.create(body)
    return evaluacion
  }

  static async actualizarEvaluacion({ req }) {
    const evaluaciones = await Evaluacion.find({ idLibroNotaMes: req.body.idLibroNotaMes })
    const estudiantes = req.body.estudiantes

    const listadoRevisiones = []
    for (let i = 0; i < evaluaciones.length; i++) {
      const revisiones = []

      for(let j = 0; j < estudiantes.length; j++) {
        revisiones.push(estudiantes[j].evaluaciones[i]) 
      }
      // listadoRevisiones.push(revisiones)
      const evaluacion = await Evaluacion.findById(evaluaciones[i]._id)
      evaluacion.revisiones = revisiones
      evaluacion.save()
    }
    // console.log('evaluaciones', evaluaciones)
    // console.log('revisiones', listadoRevisiones)

    return estudiantes
    // Recuperar todas la evaluaciones del "LibroNotaMes" actual
    // Recorrer las evaluaciones
    // Dentro del ciclo de las evaluaciones recorrer los Estudiantes desde req.body.estudiantes
    // Formatear la data de revisiones para actualizar los datos de la colección "evauacions"  
  }



  static async crearEvaluacionesLibroMes({ req }) {
    const evaluaciones = req.body.evaluaciones
    return evaluaciones
  }

  static async getEstablecimiento(usuario) {
    const idEstablecimiento = usuario.config.establecimiento
    const establecimiento = await Establecimiento.findById(idEstablecimiento)
    return establecimiento
  }

  static async obtenerLibroNotaMesActual({req}) {
    const datos = await LibroNotaMes.findOne({
      idAsignatura: ObjectId(req.query.idAsignatura),
      periodo: parseInt(req.query.periodo),
      idCurso: ObjectId(req.query.idCurso),
      mes: req.query.mes
    })
    return datos
  }
}

module.exports = EvaluacionService