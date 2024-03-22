/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/


const nodemailer = require('nodemailer');


const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: '21cs200_karthikk@stjosephs.ac.in', // TODO: your gmail account
        pass: "Karthik@2612" // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'bangladeshschoolapp@gmail.com', // TODO: email sender
    to: 'karthikkishore2603@gmail.com', 
    subject: 'welcome to scholarship app',
    text: ' We are happy to have you on board.'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error occurs', err);
        return log('Error occurs');

    }
    return log('Email sent!!!');
});