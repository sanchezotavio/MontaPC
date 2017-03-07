var stringSecurity = require('./stringSecurity')

module.exports = {
  'facebookAuth': {
    'clientID': stringSecurity.facebookClientId(),
    'clientSecret': stringSecurity.facebookClientSecret(),
    'callbackURL': 'http://localhost:5000/auth/facebook/callback'
  },

  'googleAuth': {
    'clientID': stringSecurity.googleClientId(),
    'clientSecret': stringSecurity.googleClientSecret(),
    'callbackURL': 'http://localhost:5000/auth/google/callback'
  }
}
