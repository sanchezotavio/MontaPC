var stringSecurity = require('./stringSecurity')

module.exports = {
  'facebookAuth': {
    'clientID': stringSecurity.facebookClientId(),
    'clientSecret': stringSecurity.facebookClientSecret(),
    'callbackURL': 'http://montapc.herokuapp.com/facebook/callback'
  },

  'googleAuth': {
    'clientID': stringSecurity.googleClientId(),
    'clientSecret': stringSecurity.googleClientSecret(),
    'callbackURL': 'http://montapc.herokuapp.com/auth/google/callback'
  }
}
