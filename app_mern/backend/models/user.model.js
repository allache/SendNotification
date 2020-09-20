const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  
  username: {type: String,required: true,unique: true,trim: true,minlength: 3},
  firstname: { type: String, required: true },
  lastname: { type: String, required: true }, // this called some validation
  //description: { type: String, required: true },
  category: { type: String, required: true },
  state: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  birth: { type: String, required: true },
  id_player: { type: String, required: true },
  //description: { type: String, required: true },
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema); // u can use what iu want here we called user

module.exports = User;