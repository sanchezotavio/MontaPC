module.exports = function (app, passport) {

  var searchController = app.controllers.search

  app.get('/search/:what', searchController.what)
  app.get('/search/:what/user/pc', searchController.whatUserPC)
}
