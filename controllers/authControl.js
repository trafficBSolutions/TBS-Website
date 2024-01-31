const Application = require('../models/user');

const test = (req, res) => {
    res.json('Test is Working')
}

const submitApplication = async (req, res) => {
  try {
    const {
      first,
      last,
      email,
      phone,
      resume,
      cover,
      message
    } = req.body;
    

    // check for email
    
    const existingApp = await Application.findOne({ $or: [{ email }, { phone }] });
    if (existingApp) {
        return res.status(400).json({
          error: "Application has already been submitted with this email or phone number. If you recently worked for TBS, please call 706-263-0175. If you're new and have submitted before, please wait until we review your application."
        });
      }


      const newApp = await Application.create({ first, last, email, phone, resume, cover, message });

      return res.json(newApp);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

    // Create a new application entry
    

    // Save the application to the database

module.exports = {
    test,
    submitApplication
}