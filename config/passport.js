var FacebookStrategy = require('passport-facebook').Strategy

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

var User = require('../app/models/User')

var configAuth = require('./auth')

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'name', 'displayName', 'picture.type(large)', 'profileUrl', 'email']
  },

    (token, refreshToken, profile, done) => {
      process.nextTick(() => {
        User.findOne({ 'facebook.id': profile.id }, (err, user) => {
          if (err)
            return done(err)

          if (user) {
            return done(null, user)
          } else {
            var newUser = new User()

            newUser.name = profile.name.givenName + ' ' + profile.name.familyName
            newUser.email = profile.emails[0].value
            newUser.date = Date.now()
            newUser.imageUser = profile.photos[0].value
            newUser.facebook.id = profile.id
            newUser.facebook.token = token
            newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName
            newUser.facebook.profileUrl = profile.profileUrl
            newUser.facebook.email = profile.emails[0].value

            newUser.save((err) => {
              if (err)
                throw err

              return done(null, newUser)
            })
          }
        })
      })
    }))

  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL

  },
    function (token, refreshToken, profile, done) {

      // make the code asynchronous
      // User.findOne won't fire until we have all our data back from Google
      process.nextTick(function () {

        // try to find the user based on their google id
        User.findOne({ 'google.id': profile.id }, function (err, user) {
          if (err)
            return done(err)

          if (user) {
            return done(null, user)
          } else {
            var newUser = new User()

            newUser.name = profile.displayName
            newUser.email = profile.emails[0].value
            newUser.date = Date.now()
            newUser.imageUser = profile.picture
            newUser.google.id = profile.id
            newUser.google.token = token
            newUser.google.name = profile.displayName
            newUser.google.email = profile.emails[0].value


            newUser.save(function (err) {
              if (err)
                throw err
              return done(null, newUser)
            })
          }
        })
      })
    }))
}
