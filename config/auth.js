const stringSecurity = require('./stringSecurity')
const domain = "http://montapc.heroku.com"

module.exports = {
  'facebookAuth': {
    'clientID': stringSecurity.facebookClientId(),
    'clientSecret': stringSecurity.facebookClientSecret(),
    'callbackURL': `${domain}/auth/facebook/callback`
  },

  'googleAuth': {
    'clientID': stringSecurity.googleClientId(),
    'clientSecret': stringSecurity.googleClientSecret(),
    'callbackURL': `${domain}/auth/google/callback`
  }
}
