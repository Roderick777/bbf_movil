const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const jwt_decode = require('jwt-decode');

const Usuario = require('../models/Usuario')
const LibroNotaMes = require('../models/LibroNotaMes');
const Asignatura = require('../models/Asignatura');
const Curso = require('../models/Curso');

class UsuarioController{

  static async lista({ res }) {
    const usuario = await Usuario.find({});
    res.json(usuario);
  }
  
  static async crear({ req, res }) {
    const datos = req.body
    datos.clave = '12345'
    datos.rol   = req.body.rol != undefined ? req.body.rol : 'profesor'
    const usuario = await Usuario.create(datos)
    res.status(200).json(usuario);
  }

  static async eliminar({ req, res }) {
    const usuario = await Usuario.findByIdAndDelete({_id: req.params.id});
    res.status(200).json(usuario);
  }

  static async getUltimosLibroNota({ req, res }) {
    const jwt       = jwt_decode(req.header('Authorization'))
    const libros    = await LibroNotaMes.find({ idUsuario: ObjectId(jwt.usuario._id) }).sort({fecha: -1})
    const librosRes = []
    for (const libro of libros) {
      const libroNew      = { ...libro._doc }
      const asignatura    = await Asignatura.findById(libro.idAsignatura)
      const curso         = await Curso.findById(libro.idCurso)
      libroNew.asignatura = asignatura
      libroNew.curso      = curso
      librosRes.push(libroNew)
    }
    res.status(200).json(librosRes)
  }
}

module.exports = UsuarioController