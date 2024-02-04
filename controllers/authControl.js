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

        // Contact details for William L Rowell Traffic and Barrier Solutions, LLC
        const contactInfo = `
            <p>Contact Information:</p>
            <p>William L Rowell</p>
            <p>Traffic and Barrier Solutions. LLC</p>
            <p>723 N Wall Street</p>
            <p>Calhoun, GA 30701</p>
            <p>Cell: 706-879-0106</p>
            <p>Website: <a href="http://www.trafficbarriersolutions.com">www.trafficbarriersolutions.com</a></p>
        `;

        // Send notification email with attachments and contact details
        const mailOptions = {
            from: 'Traffic & Barrier Solutions LLC <tbsolutions9@gmail.com>',
            to: email,
            bcc: myEmail,
            subject: 'Application Submitted',
            html: `
                <p>Dear Applicant,</p>
                <p>Your application has been submitted successfully! We will be with you within 48 hours!</p>
                <p>First Name: ${first}</p>
                <p>Last Name: ${last}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message:</p>
                <p>${message}</p>
                ${contactInfo}
            `,
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

