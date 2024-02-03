const Application = require('../models/user');
const transporter = require('../utils/emailConfig');
const myEmail = 'tbsolutions9@gmail.com';

const test = (req, res) => {
    res.json('Test is Working');
};

const submitApplication = async (req, res) => {
    try {
        const {
            first,
            last,
            email,
            phone,
            message
        } = req.body;

        // Extract filenames from req.files
        const resumeFilename = req.files['resume'][0].filename;
        let coverFilename;

        if (req.files['cover']) {
            coverFilename = req.files['cover'][0].filename;
        }

        // Check if the email is valid
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            return res.status(400).json({
                error: "Invalid email address"
            });
        }

        // Check if application already exists with the same email, phone, resume, or cover letter
       
          
       

        // Create a new application entry
        const newApp = await Application.create({
            first,
            last,
            email,
            phone,
            message,
            resume: resumeFilename,
            cover: coverFilename
        });

        // Prepare attachments for email
        const attachments = [{
            filename: resumeFilename,
            path: `./files/${resumeFilename}`
        }];

        if (coverFilename) {
            attachments.push({
                filename: coverFilename,
                path: `./files/${coverFilename}`
            });
        }

        // Send notification email with attachments
        const mailOptions = {
            from: 'Traffic & Barrier Solutions LLC <tbsolutions9@gmail.com>',
            to: email,
            bcc: myEmail,
            subject: 'Application Submitted',
            text: `Dear Applicant,\n\nYour application has been submitted successfully! We will be with you within 48 hours!\n\nFirst Name: ${first}\nLast Name: ${last}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
            attachments
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email notification:', error);
            } else {
                console.log('Email notification sent:', info.response);
            }
        });

        return res.json(newApp);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                error: "Duplicate email or phone",
                message: "Application has already been submitted with this email, phone number, resume, or cover letter. If you recently worked for TBS, please call 706-263-0175. If you're new and have submitted before, please wait until we review your application."
            });
        }

        console.log(error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

module.exports = {
    test,
    submitApplication
};
