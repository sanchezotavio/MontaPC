var domain = require('../../config/domain')

module.exports = (app, passport) => {

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect(domain.active())
  })

  // Facebook
  app.get('/auth/facebook', passport.authenticate('facebook', {
    session:  true,
    scope: ['email']
  }))

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    session: true,
    failureRedirect: `${domain.active()}/login`
  }), (req, res) => {
    res.redirect(`${domain.active()}/#/user/home`)
  }, (err, req, res, next) => {
    if (err) {
      res.status(400)
      res.render('error', {message: err.message})
    }
  })

  /* Google */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/auth/google/callback', passport.authenticate('google', {
    session: true,
    failureRedirect: `${domain.active()}/login`
  }), (req, res) => {
    res.redirect(`${domain.active()}/#/user/home`)
  }, (err, req, res, next) => {
    if (err) {
      res.status(400)
      res.render('error', {message: err.message})
    }
  })

}
