const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ambassadorSchema = new Schema({
    fullname: {
        type: String,
      },
    email: {
        type: String,
    },
    phone: {
        type: Number,
     },
    gender: {
        type: String,    
      },
     country:  {
        type: String,  
      },
    city:{
        type: String,   
      },
    facebook: {
        type: String
      },
    twitter: {
        type: String,
      },
     address: {
        type: String
      },
            // userId: {
            //     type: Schema.Types.ObjectId,
            //     ref: 'User',   
            //   },
             timestamps:{type: Date} 
    });
module.exports = mongoose.model('Ambassador', ambassadorSchema);