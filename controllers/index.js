const nodemailer = require('nodemailer');
const axios = require('axios').default;

const client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
    }
});

const getIndex = (req, res, next) => {
    res.render('./index.ejs', {
        pageTitle: 'The Anh | 3D Animator, Art, Writer, Life'
    });
};

const postContact = async (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    // const token = req.body['g-recaptcha-response'];

    const emailContact = {
        from: 'do-not-reply@the16anh.com',
        to: email,
        subject: 'Thank you for contacting!',
        text: 'Thank you for contacting!',
        html: `<h1>Thank you for contacting me!</h1>
        <p>Please do not reply to this email, I will get back to you soon!</p>
        <p>Thank you very much!</p>
        `
    };

    const emailNotify = {
        from: email,
        to: 'phongvu99@outlook.com',
        subject: `Hi, I'm ${name}, let's talk!`,
        text: `${message}`,
        html: `${message}`
    };
    try {
        // const info1 = await client.sendMail(emailContact);
        // const info2 = await client.sendMail(emailNotify);
        // console.log('Info', info1);
        // console.log('Info', info2);
        res.status(200).json({
            message: 'Message Sent!'
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getIndex: getIndex,
    postContact: postContact
};