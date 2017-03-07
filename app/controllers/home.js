module.exports = (app) =>{
    var homeController = {
        index : (req,res) =>{
            console.log('Home')
        }
    }
    return homeController
}