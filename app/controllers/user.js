var mongoose = require('mongoose')

var User = mongoose.model('User')

var PC = mongoose.model('PC')

var domain = require('../../config/domain')

module.exports = (app) => {
  var userController = {
    load: (req, res) => {
      var _id = req.params.id
      User
        .find({'_id': _id})
        .exec()
        .then((user) => {
          if (!user) {
            throw new Error('User not found')
          } else {
            res.json(user)
          }
        }, (erro) => {
          console.log(erro)
          res
            .status(404)
            .json(erro)
        })
    },

    validate: (req, res) => {
      if (req.user) {
        res.json({success: true, name: req.user.name, imageUser: req.user.imageUser})
      } else {
        res.json({success: false})
      }
    },

    loggedOn: (req, res, next) => {
      if (req.user) {
        next()
      } else {
        res.redirect(`${domain.active()}/login`)
      }
    },

    newPC: (req, res) => {
      if (req.user) {
        var _id = req.body._id
        var data = {
          'name': req.body.name,
          'createdBy': req.user._id,
          'info': {
            'description': req.body.description,
            'type': req.body.type,
            'date': req.body.date,
            'hour': req.body.hour
          },

          'group': [req.user._id]
        }
        if (_id) {
          PC
            .findByIdAndUpdate(_id, dados)
            .exec()
            .then((pc) => {
              console.log(pc)
              res.json({
                data: [
                  {
                    success: true,
                    pcid: pc._id
                  }
                ]
              })
            }, (erro) => {
              console.error(erro)
              res
                .status(500)
                .json(erro)
            })
        } else {
          PC
            .create(data)
            .then((pc) => {
              console.log(pc)
              res.json({
                data: [
                  {
                    success: true,
                    pcid: pc._id
                  }
                ]
              })
            }, (erro) => {
              console.log(erro)
              res
                .status(500)
                .json(erro)
            })
        }
      } else {
        res.json({
          data: [
            {
              success: false
            }
          ]
        })
      }
    },

    main: (req, res) => {
      if (req.user) {
        res.json({data: req.user});
      } else {
        res.json({data: null})
      }
    },

    pcs: (req, res) => {
      if (req.user) {
        var _id = req.user._id
        PC
          .find({createdBy: _id})
          .exec()
          .then((pc) => {
            res.json(pc)
          }, (erro) => {
            console.error(erro)
            res
              .status(500)
              .json(erro)
          })
      }
    }

  }
  return userController
}