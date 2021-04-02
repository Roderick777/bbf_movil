const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const Curso = require('../models/Curso')
const Establecimiento = require('../models/Establecimiento')
const Estudiante = require('../models/Estudiante')
const Evaluacion = require('../models/Evaluacion')
const EvaluacionService = require('../services/Evaluacion.service')


class EstudianteController {
  static async crear({ req, res}) {
    const datos = req.body
    // const establecimiento = await Establecimiento.findById({_id: datos.idEstablecimiento}) 
    datos.idCurso = ObjectId(datos.idCurso)
    datos.idEstablecimiento = ObjectId(datos.idEstablecimiento)

    const estudiante = await Estudiante.create(datos)
    res.status(200).json(estudiante)
  }

  static async listaEstudiantesCurso({ req, res }) {
    const idCurso     = req.query.idCurso
    const estudiantes = await Estudiante.find({ idCurso }).exec()
    res.status(200).json(estudiantes)
  }

  static async listaEstudiantesCursoConEvaluaciones({ req, res }) {
    const idCurso       = req.query.idCurso
    const estudiantes   = await Estudiante.find({ idCurso: ObjectId(idCurso) }).exec()
    const libroNotaMes  = await EvaluacionService.obtenerLibroNotaMesActual({req})

    if(libroNotaMes != null) {
      const evaluaciones  = await Evaluacion.find({ idLibroNotaMes: libroNotaMes._id }).exec()
      const respuesta     = await this.addEvaluaciones(4, estudiantes, libroNotaMes, evaluaciones)
      res.status(200).json({idLibroNotaMes: libroNotaMes._id, estudiantes: respuesta})
    } else {
      const respuesta     = await this.addEvaluacionesBase(4, estudiantes)
      res.status(200).json({ idLibroNotaMes: null, estudiantes: respuesta})
    }
  }

  static async addEvaluacionesBase(cantidadEvaluaciones, estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].evaluaciones = []
      for (let j = 0; j < cantidadEvaluaciones; j++) {
        const revision = {
          nota: null,
          porcentajeLogro: null,
          rutEstudiante: estudiantes[i].rut,
          nombreEstudiante: estudiantes[i].nombre,
          idUsuario: '',
          idEstudiante: estudiantes[i]._id
        }
        estudiantes[i].evaluaciones.push(revision)
      }      
    }
    return await estudiantes
  }

  static async addEvaluaciones(cantidadEvaluaciones, estudiantes, libro, evaluaciones) {
    for (let i = 0; i < estudiantes.length; i++) {
      estudiantes[i].evaluaciones = []
      for (let j = 0; j < evaluaciones.length; j++) {
        const revisiones      = evaluaciones[j].revisiones
        const evalEstudiante  = revisiones.find((e) => estudiantes[i].rut == e.rutEstudiante)
        estudiantes[i].evaluaciones.push(evalEstudiante)
      }      
    }
    return await estudiantes
  }

  static async listaEstudiantesEstablecimiento({req, res}) {
    const idEstablecimiento = req.query.idEstablecimiento
    const estudiantes       = await Establecimiento.find({ idEstablecimiento: ObjectId(idEstablecimiento)})
    res.status(200).json(estudiantes)
  }

  static async listar({req, res}) {
    const estudiantes = await Estudiante.find({})
    res.status(200).json(estudiantes)
  }

//   static async listar({ req, res}) {
//     const idEstablecimiento = req.query.idEstablecimiento
//     const curso = await Curso.find({ idEstablecimiento: ObjectId(idEstablecimiento) })
//     res.status(200).json(curso)
//   }

  static async eliminar({req, res}) {
    const _id         = req.params.id
    const estudiante  = await Estudiante.findByIdAndDelete({_id})
    res.status(200).json(estudiante)
  }

  static async importarEstudiantes ({ req, res }) {
    let i                   = 0
    const listaExcel        = req.body.listaExcel
    const establecimiento   = await Establecimiento.findById({_id: req.body.idEstablecimiento})
    for (let estudiante of listaExcel) {
      const curso                         = await this.encontrarCurso(estudiante, req.body.idEstablecimiento)
      listaExcel[i].curso                 = curso
      listaExcel[i].establecimiento       = establecimiento
      listaExcel[i].periodo               = req.body.periodo
      listaExcel[i].idCurso               = curso._id
      listaExcel[i].nombreCurso           = curso.nombre
      listaExcel[i].nombreEstablecimiento = establecimiento.nombre
      listaExcel[i].idEstablecimiento     = establecimiento._id
      await Estudiante.create(listaExcel[i])
      i++
    }
    res.status(200).json(req.body.listaExcel)
  }

  /**
   * @description Esta función retora el curso asociado a un estudiante, si no lo encuentra entonces lo crea y lo retorna
   * @param {EstudianteModel} estudiante 
   */
  static async encontrarCurso(estudiante, idEstablecimiento) {
    const curso = await Curso.find({
      nivel     : estudiante.nivel,
      seccion   : estudiante.seccion,
      ensenanza : estudiante.ensenanza,
      idEstablecimiento
    }).exec()
    if(curso.length > 0) {
      return curso[0]
    } else {
      const datos = {
        nombre    : `${estudiante.nivel}° ${estudiante.ensenanza} ${estudiante.seccion}`,
        nivel     : estudiante.nivel,
        seccion   : estudiante.seccion,
        ensenanza : estudiante.ensenanza,
        idEstablecimiento 
      }
      const nuevoCurso = await Curso.create(datos)
      return nuevoCurso
    }
  }
}



module.exports = EstudianteController