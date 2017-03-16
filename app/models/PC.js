var mongoose = require('mongoose')

var findOrCreate = require('mongoose-findorcreate')

var pcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    text: true
  },
  createdBy: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String
  },
  description: {
    type: String,
    text: true
  },
  component: {
    name: {
      type: String,
      text: true
    },
    type: {
      type: String,
      text: true
    },
    price: {
      type: String,
      text: true
    },
    link: {
      type: String,
      text: true
    },
    description: {
      type: String,
      text: true
    }
  }

})

var PC

try {
  PC = mongoose.model('PC')
} catch (error) {
  PC = module.exports = mongoose.model('PC', pcSchema)
}
