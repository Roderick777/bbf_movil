const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken')
const Mail = require('../util/mail')

class AuthController{

  static async iniciarSesion({ req, res }) {
    const { correo, clave } = req.body
    const usuario = await Usuario.findOne({correo, clave})
    if (usuario) {
      usuario.clave = 'secreto'
      const token = jwt.sign({ usuario }, 'millavesecreta', { expiresIn: 1440 });
      res.json({datos: usuario, token, error: false, message: 'éxito'})
    } else {
      res.send({ error: true, message: 'Usuario y/o clave incorrecto(s)'})
    }  
  }

  /** @param {string} correo, @param {string} clave, @param {string} nombre */
  static async registrarse({req, res}) {
    const body = this.crearConfiguracionUsuario(req.body)
    const existeUsuario = await this.existeUsuario(body.correo)
    if(existeUsuario) {
      res.status(428).json({error: 'El correo ingresado ya existe en el sistema', datos: null})
    } else {
      const usuario = await Usuario.create(body)
      const token = jwt.sign({ usuario }, 'millavesecreta', { expiresIn: 1440 });
      const mailOptions = Mail.getMailOptions(
        'rodrigoalexissss@gmail.com',
        body.correo,
        'Bienvenido a la plataforma',
        'Te damos la bienvenida a la plataforma'
      )
      usuario.token = token
      Mail.send(mailOptions)
      res.status(200).json({error: '', datos: usuario})
    }
  }

  static crearConfiguracionUsuario(body) {
    body.config = {
      tipoTrimestre: null, 
      periodoElegido: null,
      evaluaciones: null,
      establecimiento: null,
    }
    return body
  }

  static async existeUsuario(correo) {
    const usuario = await Usuario.find({correo})
    if(usuario.length > 0) {
      return true
    } else {
      return false
    }
  }
   
}

module.exports = AuthController