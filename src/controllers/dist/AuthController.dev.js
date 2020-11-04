"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = require('../models/Usuario');

var jwt = require('jsonwebtoken');

var AuthController =
/*#__PURE__*/
function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, null, [{
    key: "autenticar",
    value: function autenticar(_ref) {
      var res, payload, token;
      return regeneratorRuntime.async(function autenticar$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = _ref.res;
              payload = {
                check: true
              };
              token = jwt.sign(payload, 'millavesecreta', {
                expiresIn: 1440
              });
              res.json({
                mensaje: 'Autenticación correcta',
                token: token
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "validarToken",
    value: function validarToken(_ref2) {
      var req, res, token;
      return regeneratorRuntime.async(function validarToken$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref2.req, res = _ref2.res;
              token = req.headers['access-token'];

              if (token) {
                jwt.verify(token, app.get('llave'), function (err, decoded) {
                  if (err) {
                    return res.json({
                      mensaje: 'Token inválida'
                    });
                  } else {
                    req.decoded = decoded;
                    next();
                  }
                });
              } else {
                res.send({
                  mensaje: 'Token no proveída.'
                });
              }

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "usuarioAutenticado",
    value: function usuarioAutenticado(_ref3) {
      var req, res, usuario;
      return regeneratorRuntime.async(function usuarioAutenticado$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = _ref3.req, res = _ref3.res;
              usuario = {
                nombre: 'John',
                rut: '11111111-1',
                correo: 'example',
                clave: '12345'
              };
              res.status(200).json(usuario);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return AuthController;
}();

module.exports = AuthController;