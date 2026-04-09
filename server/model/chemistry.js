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

// Export the model so you can use it in your server.js or routes
module.exports = mongoose.model('Chemistry', imageSchema,'chemistry'); 
