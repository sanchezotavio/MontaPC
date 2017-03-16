module.exports = function (app, passport) {

  var searchController = app.controllers.search

  app.get('/search/:what',
    searchController.what
  )
}
