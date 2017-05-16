module.exports = function (app, passport) {

  var searchController = app.controllers.search

  app.get('/api/search/:what', searchController.what)
  app.get('/api/search/:what/user/pc', searchController.whatUserPC)
}
