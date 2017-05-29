var express = require('express')

module.exports = function (app, passport) {
  var userController = app.controllers.user

  app.get('/api/user', userController.main)

  app.get('/api/user/validate', userController.validate)

  app.get('/api/user/home', userController.loggedOn)

  app.get('/api/user/main/:id', userController.load)

  app.get('/api/user/pcs', userController.loggedOn, userController.pcs)

  app.post('/api/user/newpc', userController.loggedOn, userController.newPC)
}
