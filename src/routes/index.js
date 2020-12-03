const Router = require('express')
const router = Router()
const NotaController = require('../controllers/NotaController')
const MensajeController = require('../controllers/MensajeController')
const BannerController = require('../controllers/BannerController')
const AuthController = require('../controllers/AuthController')
const MicroFrontController = require('../controllers/MicroFrontController')
const SitioController = require('../controllers/SitioController')

// Auth
router.post('/login', async(req, res) => await AuthController.autenticar({ req, res }))

// Notas
router.get('/', async(req, res) => await NotaController.mensaje({req, res}))
router.post('/nueva-nota', async (req, res) => await NotaController.crearNota({req, res}))
router.get('/notas', async(req, res) => await NotaController.obtenerNotas({req, res}))
router.get('/nota/:id', async (req, res) => await NotaController.obtener({req, res}))
router.delete('/nota/:id', async (req, res) => await NotaController.eliminar({req, res}))

// Api Dummy Mensajes
router.post('/mensaje', async (req, res) => await MensajeController.crearMensaje({req, res}))
router.get('/mensaje', async (req, res) => await MensajeController.obtenerMensajes({req, res}))
router.delete('/mensaje/:id', async (req, res) => await MensajeController.eliminar({req, res}))

// Api Dummy Banner
router.get('/banner', async (req, res) => await BannerController.obtenerBanners({req, res}))
router.post('/banner', async (req, res) => await BannerController.crearBanner({req, res}))

// Api Dummy MicroFront
router.get('/microfront', async (req, res) => await MicroFrontController.obtenerMicroFronts({req, res}))
router.get('/datagrid-example', async (req, res) => await MicroFrontController.dataGridExample({req, res}))
router.get('/ejecutivo', async (req, res) => await MicroFrontController.ejecutivo({req, res}))
router.get('/documentacion/estudio/poderes', async (req, res) => await MicroFrontController.documentacionEstudioPoderes({req, res}))
router.get('/paises', async (req, res) => await MicroFrontController.getPaises({req, res}))
router.get('/empresa/datos', async (req, res) => await MicroFrontController.empresaDatos({req, res}))
router.get('/informe/documentosConProblemas', async (req, res) => await MicroFrontController.documentosConProblemas({req, res}))

router.get('/sitio/carrusel', async (req, res) => await SitioController.getCarrusel({req, res}))



module.exports = router;