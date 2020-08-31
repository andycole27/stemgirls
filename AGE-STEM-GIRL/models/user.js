const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date,
  stemgirlId: {
      type: Schema.Types.ObjectId,
      ref: 'Stemgirl',
      required: true
    }
});



module.exports = mongoose.model('User', userSchema);
