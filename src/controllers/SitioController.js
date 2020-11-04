const Carrusel = require('../models/Carrusel')

class SitioController{
    static async getCarrusel({res}) {
        const carrusel = await  Carrusel.find({});
        res.json(carrusel);
    }
}

module.exports = SitioController

