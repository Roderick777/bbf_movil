const Factoring = require('../models/Factoring')

class FactoringController{

  static async lista({ res }) {
    const factoring = await Factoring.find({})
    res.json(factoring)
  }
  
}

module.exports = FactoringController