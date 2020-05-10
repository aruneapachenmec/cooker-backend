const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  first_name: {
    type: 'String',
    required: true,
  },
  last_name:  {
    type: 'String',
    required: true,
  } ,
  email: {
    type: 'String',
    required: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  }
}) 

module.exports = mongoose.model('User', userSchema);