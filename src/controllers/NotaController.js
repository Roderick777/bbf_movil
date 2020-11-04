const Nota = require('../models/Nota')

//Todas las notas
class NotaController{
    static async mensaje(req, res) {
        res.send('hola')
    }
    static async obtenerNotas(req, res) {
        const notaDB = await Nota.find({});
        res.json(notaDB);
    }
    static async crearNota(req, res) {
        const notaDB = await Nota.create(req.body);
        res.status(200).json(notaDB);
    }
    static async obtener(req, res) {
        const _id = req.params.id
        const notaDB = await Nota.findOne({_id});
        if(!notaDB) return general.errorApi(res, error, 'No se encontró el valor solicitado')
        res.status(200).json(notaDB);
    }
    static async eliminar(req, res) {
        const _id = req.params.id
        const notaDB = await Nota.findByIdAndDelete({_id});
        res.status(200).json(notaDB);
    }
}

module.exports = NotaController