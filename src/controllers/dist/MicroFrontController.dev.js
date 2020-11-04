"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pais = require('../models/Pais');

var MicroFrontController =
/*#__PURE__*/
function () {
  function MicroFrontController() {
    _classCallCheck(this, MicroFrontController);
  }

  _createClass(MicroFrontController, null, [{
    key: "obtenerMicroFronts",
    value: function obtenerMicroFronts(_ref) {
      var res, microfronts;
      return regeneratorRuntime.async(function obtenerMicroFronts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res = _ref.res;
              microfronts = [{
                appName: 'http://localhost:4200/main.js',
                enabled: true,
                name: '@nectia/home',
                route: '/#'
              }, {
                appName: 'http://localhost:4201/main.js',
                enabled: true,
                name: '@nectia/documentos',
                route: '/#/documentos'
              }, {
                appName: 'http://localhost:4202/main.js',
                enabled: true,
                name: '@nectia/cobranza',
                route: '/#/cobranza/'
              }, {
                appName: 'http://localhost:4204/main.js',
                enabled: true,
                name: '@nectia/informes',
                route: '/#/informes'
              }];
              res.json(microfronts);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "dataGridExample",
    value: function dataGridExample(_ref2) {
      var res, data;
      return regeneratorRuntime.async(function dataGridExample$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              res = _ref2.res;
              data = [{
                ejemplo: 'A'
              }, {
                ejemplo: 'Z'
              }, {
                ejemplo: 'B'
              }, {
                ejemplo: 'F'
              }, {
                ejemplo: 'D'
              }, {
                ejemplo: 'E'
              }];
              res.json(data);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "ejecutivo",
    value: function ejecutivo(_ref3) {
      var res, data;
      return regeneratorRuntime.async(function ejecutivo$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              res = _ref3.res;
              data = {
                ejecutivo: {
                  nombre: 'Nicole Currin',
                  fono: '225843763',
                  correo: 'nicole.currin@security.cl'
                },
                asistente: {
                  nombre: 'Nicole Currin',
                  fono: '225843763',
                  correo: 'nicole.currin@security.cl'
                },
                gestionador: {
                  nombre: 'Nicole Currin',
                  fono: '225843763',
                  correo: 'nicole.currin@security.cl'
                }
              };
              setTimeout(function () {
                res.json(data);
              }, 2000);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "documentacionEstudioPoderes",
    value: function documentacionEstudioPoderes(_ref4) {
      var res, data;
      return regeneratorRuntime.async(function documentacionEstudioPoderes$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              res = _ref4.res;
              data = [{
                nombreTipoDocumento: 'Documento Estudio de Poder 1',
                codigoTipoDocumento: 'CODIGO1'
              }, {
                nombreTipoDocumento: 'Documento Estudio de Poder 2',
                codigoTipoDocumento: 'CODIGO2'
              }, {
                nombreTipoDocumento: 'Documento Estudio de Poder 3',
                codigoTipoDocumento: 'CODIGO3'
              }];
              res.json({
                respuesta: {
                  datos: data
                }
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "getPaises",
    value: function getPaises(_ref5) {
      var res, pais;
      return regeneratorRuntime.async(function getPaises$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              res = _ref5.res;
              _context5.next = 3;
              return regeneratorRuntime.awrap(Pais.find({}));

            case 3:
              pais = _context5.sent;
              res.json({
                respuesta: {
                  datos: pais
                }
              });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "empresaDatos",
    value: function empresaDatos(_ref6) {
      var res, datos;
      return regeneratorRuntime.async(function empresaDatos$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              res = _ref6.res;
              datos = {
                razonSocial: '',
                nombreFantasia: '',
                actividadEconomica: '',
                sitioWeb: '',
                calle: '',
                numeroCalle: 0,
                departament: 0,
                block: 0,
                pais: '',
                region: '',
                comuna: '',
                codigoPostal: ''
              };
              res.json({
                respuesta: {
                  datos: datos
                }
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);

  return MicroFrontController;
}();

module.exports = MicroFrontController;