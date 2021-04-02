const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const Curso = require('../models/Curso')
const Establecimiento = require('../models/Establecimiento')


class CursoController {
  static async crear({ req, res}) {
    const datos = req.body
    const establecimiento = await Establecimiento.findById({_id: datos.idEstablecimiento}) 
    datos.idEstablecimiento = ObjectId(establecimiento._id)
    const curso = await Curso.create(datos)
    res.status(200).json(curso)
  }

  static async listar({ req, res}) {
    const idEstablecimiento = req.query.idEstablecimiento
    const curso = await Curso.find({ idEstablecimiento: ObjectId(idEstablecimiento) })
    res.status(200).json(curso)
  }

  static async eliminar({req, res}) {
    const _id = req.params.id
    const curso = await Curso.findByIdAndDelete({_id})
    res.status(200).json(curso)
  }
}

module.exports = CursoController