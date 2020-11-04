"use strict";

var Router = require('express');

var router = Router();

var NotaController = require('../controllers/NotaController');

var MensajeController = require('../controllers/MensajeController');

var BannerController = require('../controllers/BannerController');

var AuthController = require('../controllers/AuthController');

var MicroFrontController = require('../controllers/MicroFrontController'); // Auth


router.post('/login', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(AuthController.autenticar({
            req: req,
            res: res
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}); // Notas

router.get('/', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(NotaController.mensaje({
            req: req,
            res: res
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.post('/nueva-nota', function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(NotaController.crearNota({
            req: req,
            res: res
          }));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/notas', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(NotaController.obtenerNotas({
            req: req,
            res: res
          }));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/nota/:id', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(NotaController.obtener({
            req: req,
            res: res
          }));

        case 2:
          return _context5.abrupt("return", _context5.sent);

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router["delete"]('/nota/:id', function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(NotaController.eliminar({
            req: req,
            res: res
          }));

        case 2:
          return _context6.abrupt("return", _context6.sent);

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // Api Dummy Mensajes

router.post('/mensaje', function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(MensajeController.crearMensaje({
            req: req,
            res: res
          }));

        case 2:
          return _context7.abrupt("return", _context7.sent);

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.get('/mensaje', function _callee8(req, res) {
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(MensajeController.obtenerMensajes({
            req: req,
            res: res
          }));

        case 2:
          return _context8.abrupt("return", _context8.sent);

        case 3:
        case "end":
          return _context8.stop();
      }
    }
  });
});
router["delete"]('/mensaje/:id', function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(MensajeController.eliminar({
            req: req,
            res: res
          }));

        case 2:
          return _context9.abrupt("return", _context9.sent);

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}); // Api Dummy Banner

router.get('/banner', function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(BannerController.obtenerBanners({
            req: req,
            res: res
          }));

        case 2:
          return _context10.abrupt("return", _context10.sent);

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  });
});
router.post('/banner', function _callee11(req, res) {
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(BannerController.crearBanner({
            req: req,
            res: res
          }));

        case 2:
          return _context11.abrupt("return", _context11.sent);

        case 3:
        case "end":
          return _context11.stop();
      }
    }
  });
}); // Api Dummy MicroFront

router.get('/microfront', function _callee12(req, res) {
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.obtenerMicroFronts({
            req: req,
            res: res
          }));

        case 2:
          return _context12.abrupt("return", _context12.sent);

        case 3:
        case "end":
          return _context12.stop();
      }
    }
  });
});
router.get('/datagrid-example', function _callee13(req, res) {
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.dataGridExample({
            req: req,
            res: res
          }));

        case 2:
          return _context13.abrupt("return", _context13.sent);

        case 3:
        case "end":
          return _context13.stop();
      }
    }
  });
});
router.get('/ejecutivo', function _callee14(req, res) {
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.ejecutivo({
            req: req,
            res: res
          }));

        case 2:
          return _context14.abrupt("return", _context14.sent);

        case 3:
        case "end":
          return _context14.stop();
      }
    }
  });
});
router.get('/documentacion/estudio/poderes', function _callee15(req, res) {
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.documentacionEstudioPoderes({
            req: req,
            res: res
          }));

        case 2:
          return _context15.abrupt("return", _context15.sent);

        case 3:
        case "end":
          return _context15.stop();
      }
    }
  });
});
router.get('/paises', function _callee16(req, res) {
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.getPaises({
            req: req,
            res: res
          }));

        case 2:
          return _context16.abrupt("return", _context16.sent);

        case 3:
        case "end":
          return _context16.stop();
      }
    }
  });
});
router.get('/empresa/datos', function _callee17(req, res) {
  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(MicroFrontController.empresaDatos({
            req: req,
            res: res
          }));

        case 2:
          return _context17.abrupt("return", _context17.sent);

        case 3:
        case "end":
          return _context17.stop();
      }
    }
  });
});
module.exports = router;