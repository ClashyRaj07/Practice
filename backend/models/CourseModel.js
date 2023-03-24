const mongoose = require('mongoose')
const {Schema} = mongoose

const CourseSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    default: 'General'
  },
  coursre_banner_url: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: ['true', 'Please Enter Url of Course']
  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Course', CourseSchema)
