const stringSecurity = require('./stringSecurity')
var location = require('location-href')

module.exports = {
  'facebookAuth': {
    'clientID': stringSecurity.facebookClientId(),
    'clientSecret': stringSecurity.facebookClientSecret(),
    'callbackURL': `${location()}/auth/facebook/callback`
  },

  'googleAuth': {
    'clientID': stringSecurity.googleClientId(),
    'clientSecret': stringSecurity.googleClientSecret(),
    'callbackURL': `${location()}/auth/google/callback`
  }
}
