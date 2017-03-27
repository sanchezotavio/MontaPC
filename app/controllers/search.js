var mongoose = require('mongoose')

var PC = mongoose.model('PC')

module.exports = (app) => {
  var searchController = {
    what: (req, res) => {
      var _what = req.param('what')
      console.log(_what)
      PC
        .find({
        $text: {
          $search: _what
        }
      })
        .exec()
        .then((pc) => {
          res.json({'pc': pc})
        }, (erro) => {
          console.error(erro)
          res
            .status(500)
            .json(erro)
        })
    },
    whatUserPC: (req, res) => {
      var _what = req.param('what')
      PC
        .find({createdBy: _what})
        .exec()
        .then((pc) => {
          res.json({'pc': pc})
        }, (erro) => {
          console.error(erro)
          res
            .status(500)
            .json(erro)
        })
    }
  }
  return searchController
}
