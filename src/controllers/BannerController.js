const Banner = require('../models/Banner')

//Todas las notas
class BannerController{
    static async obtenerBanners({ res }) {
        const mensaje = await Banner.find({});
        res.json(mensaje);
    }
    static async crearBanner({ req, res }) {
        const mensaje = await Banner.create(req.body);
        res.status(200).json(mensaje);
    }
    static async eliminar({ req, res }) {
        const _id = req.params.id
        const mensaje = await Banner.findByIdAndDelete({_id});
        res.status(200).json(mensaje);
    }
}

module.exports = BannerController