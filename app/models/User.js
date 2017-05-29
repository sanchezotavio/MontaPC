var mongoose = require('mongoose')

var findOrCreate = require('mongoose-findorcreate')

var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  imageUser: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
    profileUrl: String
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
}}
)

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

var User

try {
  User = mongoose.model('User')
} catch (error) {
  User = module.exports = mongoose.model('User', userSchema)
}
