const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 50,
     },
     email: {
          type: String,
          required: true,
          unique: true,
          validate: {
               validator: (value) => {
                    // Check if the value is a valid email format
                    return /\S+@\S+\.\S+/.test(value);
               },
               message: 'Invalid email format',
          },
     },
     bio: {
          type: String,
          maxlength: 200,
     },
     created_at: {
          type: Date,
          default: Date.now,
     },
     updated_at: {
          type: Date,
          default: Date.now,
     },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
