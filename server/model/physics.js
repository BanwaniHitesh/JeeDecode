const mongoose = require('mongoose');

// Define the blueprint for your data
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: Number,
  answer: String,
  img: {
    data: String,        // This will hold the Base64 string
    contentType: String  // e.g., 'image/png' or 'image/jpeg'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Physics', imageSchema,'physics'); 