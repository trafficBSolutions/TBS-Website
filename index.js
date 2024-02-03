const express = require('express');
const dotenv = require('dotenv').config();
const { mongoose } = require('mongoose');
const removeDuplicates = require('./controllers/duplicateHandler');

// Create Express app
const app = express();

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

// Default route
app.get("/", async (req, res) => {
    res.send("Success!!!!!!");
});

// Define port
const port = process.env.PORT || 8000;

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
