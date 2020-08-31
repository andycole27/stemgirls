const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stemgirlSchema = new Schema({
    fullname: {
        type: String,
      },
    email: {
        type: String,
    },
    location: {
        type: String,
    },
    phone: {
        type: Number,
     },
    age: {
        type: String,    
      },
     school:  {
        type: String,  
      },
    grade:{
        type: String,   
      }
    });
module.exports = mongoose.model('Stemgirl', stemgirlSchema);