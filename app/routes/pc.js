module.exports = (app, passport) => {

    var pcController = app.controllers.pc

    app.get('/pc/:id', pcController.load)
   
}
