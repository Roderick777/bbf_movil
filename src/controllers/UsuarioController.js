const Usuario = require('../models/Usuario')

class UsuarioController{

  static async lista({ res }) {
    const usuario = await Usuario.find({});
    res.json(usuario);
  }
  
  static async crear({ req, res }) {
    const datos = req.body
    datos.clave = '12345'
    const usuario = await Usuario.create(datos)
    res.status(200).json(usuario);
  }

  static async eliminar({ req, res }) {
    const _id = req.params.id
    const usuario = await Usuario.findByIdAndDelete({_id});
    res.status(200).json(usuario);
  }
}

module.exports = UsuarioController