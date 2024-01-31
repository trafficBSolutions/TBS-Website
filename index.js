const express = require('express');
const dotenv = require('dotenv').config();
const {mongoose} = require('mongoose');
const app = express();

//Import removeDuplicates function
const removeDuplicates = require('./controllers/duplicateHandler');

// Database connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Database Connected');
    // Call removeDuplicates function after database connection
    removeDuplicates();
  })
  .catch((err) => console.log('Database Not Connected', err));

  
// Middleware
app.use(express.json());

// Routes
app.use('/', require('./routes/autoRoute'));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));