const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

class AuthController{
  static async iniciarSesion({ req, res }) {
    const { correo, clave } = req.body
    const usuario = await Usuario.findOne({correo, clave})
    if (usuario) {
      const token = jwt.sign({ usuario }, 'millavesecreta', { expiresIn: 1440 });
      usuario.token = token
      res.json({datos: usuario, error: false, message: 'éxito'})
    } else {
      res.send({ error: true, message: 'Usuario y/o clave incorrecto(s)'})
    }  
  } 
  static async jwtTest({ res }) {
      const datos = {
        DocenteId: '00000000-0000-0000-0000-000000000000',
        Nombre: 'Nombre Ejemplo',
        RUN: '11111111-1',
        Direccion: 'Calle x N° 123',
        Telefono: '+569 87xx xxxx',
        Celular: '+562 87 xxx xx',
        Estado: 'string',
        Mensaje: 'Autenticación correcta', 
      }
      const token = jwt.sign(datos, 'millavesecreta', { expiresIn: 1440 });
      const decoded = jwt_decode(token)
      console.log('test jwt', decoded)
      datos.token = token
      res.json(datos)
  }
  static async validarToken({ req, res }) {
    const token = req.headers['access-token']
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ mensaje: 'Token no proveída.' });
    }
  }
  static async usuarioAutenticado({ req, res}) {
    const usuario = {
        nombre: 'John',
        rut: '11111111-1',
        correo: 'example',
        clave: '12345'
    }
    res.status(200).json(usuario)
  }
}

module.exports = AuthController