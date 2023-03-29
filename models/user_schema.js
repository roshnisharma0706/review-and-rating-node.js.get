const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reqire: true
    },
    email: {
        type: String,
        reqire: true,
    },
    password: {
        type: String,
        reqire: true,
    },
    mobile: {
        type: String,
        reqire: true,
    },
    city: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        reqire: true,
    },
   // profilepic: {
     //   type: Boolean,
      //  default: true,
  //  },
  isActive :{
    type : String,
    default : "User"
  }


})
userSchema.set('timestamps',true)
module.exports = mongoose.model('userdetail', userSchema)

