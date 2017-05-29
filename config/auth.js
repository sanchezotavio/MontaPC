const stringSecurity = require('./stringSecurity')
const domain = require('./domain')

module.exports = {
  'facebookAuth': {
    'clientID': stringSecurity.facebookClientId(),
    'clientSecret': stringSecurity.facebookClientSecret(),
    'callbackURL': `${domain.active()}/auth/facebook/callback`
  },

  'googleAuth': {
    'clientID': stringSecurity.googleClientId(),
    'clientSecret': stringSecurity.googleClientSecret(),
    'callbackURL': `${domain.active()}/auth/google/callback`
  }
}
