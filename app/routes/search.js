module.exports = function (app, passport) {

  var searchController = app.controllers.search
  app.get('/search',
    searchController.what
  )
}
