const Establecimiento = require('../models/Establecimiento')

class EstablecimientoController {
  static async crear({ req, res}) {
    const datos = req.body
    const establecimiento = await Establecimiento.create(datos)
    res.status(200).json(establecimiento)
  }

  static async obtenerPorId({ req, res }) {
    const _id = req.params.id
    const establecimiento = await Establecimiento.findById({_id})
    res.status(200).json(establecimiento)
  }

  static async obtenerPorNombre({ req, res }) {
    const nombre = req.query.nombreEstablecimiento
    const establecimiento = await Establecimiento.find({nombre})
    res.status(200).json(establecimiento[0])
  } 

  static async listar({ req, res}) {
    const establecimeintos = await Establecimiento.find({})
    res.status(200).json(establecimeintos)
  }

  static async eliminar({req, res}) {
    const _id = req.params.id
    const establecimiento = await Establecimiento.findByIdAndDelete({_id})
    res.status(200).json(establecimiento)
  }

  static async pdfTest({req, res}) {
    const pdf = require('html-pdf');
    const content = `
    <h1>Título en el PDF creado con el paquete html-pdf</h1>
    <p>Generando un PDF con un HTML sencillo</p>
    `;

    pdf.create(content).toFile('./html-pdf.pdf', function(err, res) {
        if (err){
            console.log(err);
        } else {
            console.log(res);
        }
    })
  }
}

module.exports = EstablecimientoController