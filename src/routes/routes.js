const Router = require('express')
const router = Router()
const UsuarioController = require('../controllers/UsuarioController')
const FactoringController = require('../controllers/FactoringController')
const AuthController = require('../controllers/AuthController')


// AUTH
router.get('/jwt-test', async (req, res) => await AuthController.jwtTest({req, res}))
router.post('/iniciarsesion', async (req, res) => await AuthController.iniciarSesion({req, res}))

// USUARIO

/**
 * @description Api para crear un usuario
 * @param {string} nombre
 * @param {string} correo
 * @return {object}
 */
router.post('/usuario', async (req, res) => await UsuarioController.crear({req, res}))

/**
 * @description Api para obtener el listado completo de usuarios
 * @return {Array<object>}
 */
router.get('/usuario', async (req, res) => await UsuarioController.lista({req, res}))

/**
 * @description Api para eliminar usuario a través de su "id"
 * @param id
 * @return {object}
 */
router.delete('/usuario/:id', async (req, res) => await UsuarioController.eliminar({req, res}))


// FACTORING

/**
 * @description Api para obtener el listado completo de usuarios
 * @return {Array<object>}
 */
router.get('/factoring', async (req, res) => await FactoringController.lista({req, res}))

module.exports = router;