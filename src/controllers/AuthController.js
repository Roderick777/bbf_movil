const Usuario = require('../models/Usuario')
const jwt = require('jsonwebtoken')

class AuthController{
    static async autenticar({ res }) {
        const payload = { check:  true }
        const token = jwt.sign(payload, 'millavesecreta', { expiresIn: 1440 });
        res.json({
          DocenteId: '00000000-0000-0000-0000-000000000000',
          Nombre: 'Nombre Ejemplo',
          RUN: '11111111-1',
          Direccion: 'Calle x N° 123',
          Telefono: '+569 87xx xxxx',
          Celular: '+562 87 xxx xx',
          Estado: 'string',
          Mensaje: 'Autenticación correcta', 
          token 
        })
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