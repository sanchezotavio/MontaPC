var express = require('express')

module.exports = function (app, passport) {
  var userController = app.controllers.user

  app.get('/user', userController.main)

  app.get('/user/validate', userController.validate)

  app.get('/user/home', userController.loggedOn)

  app.get('/user/main/:id', userController.load)

  app.get('/user/pcs', userController.loggedOn, userController.pcs)

  app.post('/user/newpc', userController.loggedOn, userController.newPC)
}
