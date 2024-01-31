const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, submitApplication } = require('../controllers/authControl');


// Route for submitting an application


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)


router.get('/', test)

router.post('/applynow', submitApplication);


module.exports = router;