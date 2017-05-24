var express = require('express')

const bodyParser = require('body-parser')

var app = express()

var helmet = require('helmet')

var path = require('path');

var compression = require('compression');

/* compression */

app.use(compression());

/* Application */

app.use(helmet())

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.disable('x-powered-by')



/* Launch */

app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function () {
  console.log(`${app.get('port')} port`)
})
