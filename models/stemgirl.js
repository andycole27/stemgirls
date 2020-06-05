const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stemgirlSchema = new Schema({
    firstName:  String,
    lastName: String,
    contact: Number,
     placeofBirth:  String,
     religion: String,
     email: String,
     address: String,
     imageUrl: String,
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',   
              },
             timestamps:{type: Date} 
    });
module.exports = mongoose.model('Stemgirl', stemgirlSchema);