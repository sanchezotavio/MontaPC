module.exports = (app, passport) => {

  var accessController = app.controllers.access
 
  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  // Facebook
  app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope: ['email'] }))

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { session: true, failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/')
    },
    (err, req, res, next) => {
      if (err) {
        res.status(400)
        res.render('error', { message: err.message })
      }
    }
  )

  /* Google */   
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

  app.get('/auth/google/callback',
    passport.authenticate('google', { session: true, failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/user')
    },
    (err, req, res, next) => {
      if (err) {
        res.status(400)
        res.render('error', { message: err.message })
      }
    }
  )

}
