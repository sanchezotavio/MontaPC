var express = require('express')

var consign = require('consign')

const bodyParser = require('body-parser')

var app = express()

var helmet = require('helmet')

var passport = require('passport')

var flash = require('connect-flash')

var morgan = require('morgan')

var cookieParser = require('cookie-parser')

var session = require('express-session')

var stringSecurity = require('./config/stringSecurity')

var path = require('path');

/* Application */

app.use(helmet())

app.use(morgan('dev'))

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.disable('x-powered-by')



/* Configuration Mongoose */


require('./config/mongoose.js')(stringSecurity.mongoDB())


/* Passport */

require('./config/passport')(passport)

app.use(session({ secret: 'BugouMaisUmaVez2017' }))

app.use(passport.initialize())

app.use(passport.session())

app.use(flash())

/* Consign */

var configure = {
    cwd: path.resolve('./app'),
    logger: console,
    verbose: true,
    extensions: [ '.js', '.json', '.node' ]
  }

consign(configure)
  .include('models')
  .into(app)

consign(configure)
  .include('controllers')
  .into(app)

consign(configure)
  .include('routes')
  .into(app, passport)

/* Launch */

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function () {
  console.log(`${app.get('port')} port`)
})
