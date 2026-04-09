const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Chemistry = require('./model/chemistry');
const Physics = require('./model/physics');
const Maths = require('./model/maths');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increase limit for images

const localURI = 'mongodb://localhost:27017/image';

mongoose.connect(localURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.get('/physics', async (req, res) => {
  try {
    const allImages = await Physics.find(); // Fetches everything from the images collection
    res.json(allImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/maths', async (req, res) => {
  try {
    const allImages = await Maths.find(); // Fetches everything from the images collection
    res.json(allImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/chemistry', async (req, res) => {
  try {
    const allImages = await Chemistry.find(); // Fetches everything from the images collection
    res.json(allImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
