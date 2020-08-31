const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var homeSchema = new Schema({
    firstPage: {
        type: String,
      },
    secondPage: {
        type: String,
    },
    thirdPage: {
        type: String
      },
    fourthPage: {
        type: String,
      },
     fifthPage: {
        type: String
      }
    });
    var aboutSchema = new Schema({
      
      });
      var faqsSchema = new Schema({
      
      });
      var messageSchema = new Schema({
      
      });
module.exports = mongoose.model('Home', homeSchema);
module.exports = mongoose.model('About', aboutSchema);
module.exports = mongoose.model('Faqs', faqsSchema);
module.exports = mongoose.model('Message', messageSchema);