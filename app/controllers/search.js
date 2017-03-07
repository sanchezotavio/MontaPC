var mongoose = require('mongoose')

var PC = mongoose.model('PC')

module.exports = (app) => {
  var searchController = {
    what: (req, res) => {
      var _what = req.query.what
      PC.find( {$text: { $search: _what }}).exec()
        .then(
           (pc) => {
            res.json(pc)
          },
          (erro) => {
            console.error(erro)
            res.status(500).json(erro)
          }
      )
    }
  }
  return searchController
}

