//importing libraries
const mongoose = require('mongoose'); 
//const student = mongoose.model(name, Schema);
mongoose.Promise = global.Promise;
//Connecting Node and MongoDB
mongoose.set('useFindAndModify', true);
mongoose.connect('mongodb://localhost:27017/stem', { useFindAndModify: true },(err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')//sucess message
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)//unsucessful message
}
});
//Mongoose exports an EventEmitte
mongoose.connection.on('open', function () {console.log('connection now open');});

mongoose.connection.on('error', function (err) {
    console.log('could not be connected' + err); });

module.exports = {mongoose};