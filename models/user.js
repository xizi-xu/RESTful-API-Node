var mongoose = require('mongoose')
mongoose.connect('monogdb://localhost/database1')
var Schema = mongoose.Schema

// create schema
var userSchema = new Schema(
  {
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    location: String,
    meta: {
      age: Number,
      website: String
    },
    created_at: Date,
    updated_at: Date
  }
)

// custom method
userSchema.methods.dudify = function() {
  this.name = this.name + '-dude'
  return this.name
}

// pre-save method
userSchema.pre('save', function(next){
  var currentDate = new Date()
  this.updated_at = currentDate
  // add created_at if it does not exist
  if (!this.created_at) this.created_at = currentDate

  next()
})

var User = mongoose.model('User', userSchema)
module.exports = User
