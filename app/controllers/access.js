module.exports = (app) => {
  var accessController = {    
    loggedIn:  (req, res, next) => {
      if (req.user) {
        next()
      } else {
        res.redirect('/login')
      }
    }
  }

  return accessController
}
