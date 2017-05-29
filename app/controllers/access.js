var domain = require('../../config/domain')

module.exports = (app) => {
  var accessController = {    
    loggedIn:  (req, res, next) => {
      if (req.user) {
        next()
      } else {
        res.redirect(`${domain.active()}/login`)
      }
    }
  }

  return accessController
}
