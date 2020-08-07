const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ambassadorSchema = new Schema({
    fullname:  String,
    email: String,
    phone: String,
    gender: String,
     country:  String,
    city: String,
    facebook: String,
    twitter: String,
     address: String,
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',   
              },
             timestamps:{type: Date} 
    });
module.exports = mongoose.model('Ambassador', ambassadorSchema);