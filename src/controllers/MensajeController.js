const Mensaje = require('../models/Mensaje')

//Todas las notas
class MensajeController{
    static async obtenerMensajes({res}) {
        const mensaje = await Mensaje.find({});
        res.json(mensaje);
    }
    static async crearMensaje({req, res}) {
        const mensaje = await Mensaje.create(req.body);
        res.status(200).json(mensaje);
    }
    static async eliminar({req, res}) {
        const _id = req.params.id
        const mensaje = await Mensaje.findByIdAndDelete({_id});
        res.status(200).json(mensaje);
    }
}

module.exports = MensajeController