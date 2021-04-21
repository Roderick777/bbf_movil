const Router = require('express')
const router = Router()
const UsuarioController = require('../controllers/UsuarioController')
const AsignaturaController = require('../controllers/AsignaturaController')
const AuthController = require('../controllers/AuthController')
const MenuController = require('../controllers/MenuController')
const EstablecimientoController = require('../controllers/EstablecimientoController')
const CursoController = require('../controllers/CursoController')
const EstudianteController = require('../controllers/EstudianteController')
const LibroNotaMesController = require('../controllers/LibroNotaMesController')

// AUTH
router.post('/registrarse', async (req, res) => await AuthController.registrarse({req, res} ))/** @param {string} correo, @param {string} clave, @param {string} nombre */
router.post('/iniciarsesion', async (req, res) => await AuthController.iniciarSesion({req, res}))
router.get('/hola', (req, res) => res.json({msj: 'Hola'}))

// USUARIO
router.post('/usuario', async (req, res) => await UsuarioController.crear({req, res}))
router.get('/usuario', async (req, res) => await UsuarioController.lista({req, res}))
router.delete('/usuario/:id', async (req, res) => await UsuarioController.eliminar({req, res}))
router.get('/usuario/libroNota/ultimos', async (req, res) => await UsuarioController.getUltimosLibroNota({ req, res }))

// MENÚ
router.post('/menu', async (req, res) => await MenuController.crear({req, res}))
router.get('/menu', async (req, res) => await MenuController.listar({req, res}))
router.delete('/menu/:id', async (req, res) => await MenuController.eliminar({req, res}))
router.get('/menu/profesor', async (req, res) => await MenuController.listarMenuProfesor({req, res}))


// ESTABLECIMIENTO
router.post('/establecimiento', async (req, res) => await EstablecimientoController.crear({req, res}))
router.get('/establecimiento', async (req, res) => await EstablecimientoController.listar({req, res}))
router.get('/establecimiento/obtenerPorNombre', async (req, res) => await EstablecimientoController.obtenerPorNombre({req, res}))
router.get('/establecimiento/:id', async (req, res) => await EstablecimientoController.obtenerPorId({req, res}))
router.delete('/establecimiento/:id', async (req, res) => await EstablecimientoController.eliminar({req, res}))
router.get('pdftest', async (req, res) => await EstablecimientoController.pdfTest({req, res}) )

// CURSO
router.post('/curso', async (req, res) => await CursoController.crear({req, res}))
router.get('/curso', async (req, res) => await CursoController.listar({req, res}))
router.delete('/curso/:id', async (req, res) => await CursoController.eliminar({req, res}))


// ASIGNNATURA
router.get('/asignatura', async (req, res) => await AsignaturaController.listar({req, res}))
router.post('/asignatura', async (req, res) => await AsignaturaController.crear({req, res}))
router.delete('/asignatura/:id', async (req, res) => await AsignaturaController.eliminar({req, res}))

// ESTUDIANTE
router.post('/estudiante', async (req, res) => await EstudianteController.crear({req, res}))
router.get('/estudiante', async (req, res) => await EstudianteController.listar({req, res}))
router.get('/estudiante/curso', async (req, res) => await EstudianteController.listaEstudiantesCurso({req, res}))
router.get('/estudiante/curso/evaluaciones', async (req, res) => await EstudianteController.listaEstudiantesCursoConEvaluaciones({req, res}))

router.delete('/estudiante/:id', async (req, res) => await EstudianteController.eliminar({req, res}))
router.post('/estudiante/importar', async (req, res) => await EstudianteController.importarEstudiantes({req, res}))

// LIBRONOTAMES
router.post('/libronotames/guardar', async (req, res) => await LibroNotaMesController.guardar({req, res}))
router.get('/libronotames/obtener', async (req, res) => await LibroNotaMesController.getLibroNotaMes({ req, res }))

module.exports = router;