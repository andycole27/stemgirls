const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mentorSchema = new Schema({
    fullName:  String,
    email: String,
    location: String,
    phone: String,
    age:  String,
    });
module.exports = mongoose.model('Mentor', mentorSchema);