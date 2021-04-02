const Asignatura = require('../models/Asignatura')
const jwt = require('jsonwebtoken')

class AuthController{
    /** @param {string} nombre */
    static async  crear({ req, res}) {
        const nombre = req.body.nombre
        const asignatura = await Asignatura.create({ nombre })
        res.status(200).json(asignatura)
    }

    static async listar({req, res}) {
        const asignaturas = await Asignatura.find({}).sort({nombre: 1})
        res.status(200).json(asignaturas)
    }

    static async eliminar({ req, res }) {
        const _id = req.params.id
        const asignatura = await Asignatura.findByIdAndDelete({_id});
        res.status(200).json(asignatura);
      }
}

module.exports = AuthController