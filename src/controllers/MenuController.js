const Menu = require('../models/Menu')

class MenuController {
  static async crear({req, res}) {
    const { nombre, enlace, icono } = req.body
    const menu = await Menu.create({ nombre, enlace, icono})
    res.status(200).json(menu)
  }

  static async listar({req, res}) {
    const menu = await Menu.find({})
    res.status(200).json(menu)
  }

  static async eliminar({ req, res }) {
    const _id = req.params.id
    const menu = await Menu.findByIdAndDelete({_id});
    res.status(200).json(menu);
  }
}

module.exports = MenuController