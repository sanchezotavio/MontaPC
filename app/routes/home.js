

module.exports = function (app, passport) {
    var homeController = app.controllers.home
    app.get('/',homeController.index)
}
