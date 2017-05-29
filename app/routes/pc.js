module.exports = (app, passport) => {

    var pcController = app.controllers.pc

    app.get('/api/pc/:id', pcController.load)
   
}
