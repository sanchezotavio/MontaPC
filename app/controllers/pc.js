var mongoose = require('mongoose')

var PC = mongoose.model('PC')

module.exports = (app) => {
  var pcController = {
    load: (req, res) => {
      var _id = req.params.id
      PC.find({ '_id': _id }).exec()
        .then(
          (pc) => {
            if (!pc) throw new Error('PC not found')
            res.json(pc)
          },
          (erro) => {
            console.log(erro)
            res.status(404).json(erro)
          })
    }
    
  }
  return pcController
}
