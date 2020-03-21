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
    const emailContact = {
        from: 'info@the16anh.com',
        to: 'phongvu99@outlook.com',
        subject: 'Sending with NodeMailer is fun!',
        text: 'Text version lorem ipsum',
        html: `<p>CHECK THIS OUT!</p>
        <h1>Thank you for contacting me!</h1>
        `
    };

    const emailNotify = {
        from: 'phongvu99@outlook.com',
        to: 'camperchadway2001@gmail.com',
        subject: 'It\'s Urgent, we need to talk!',
        text: 'I saw your porfolio page',
        html: `<p>Test email. I want to discuss about the job you're looking for. Here at
        Boogle we want someone like you, a talented 3D animator. Please let us know what you think!
        
        Regards,
        Phong`
    };
    try {
        console.log('Req body', req.body);
        const token = req.body['g-recaptcha-response'];
        if (!token) {
            const err = new Error('Invalid token!');
            err.status = 422;
            throw err;
        }
        res.status(200).json({
            token: token
        });
        // const info1 = await client.sendMail(emailContact);
        // const info2 = await client.sendMail(emailNotify);
        // console.log('Info', info1);
        // console.log('Info', info2);
        // res.status(200).json({
        //     message: 'Message Sent!'
        // });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getIndex: getIndex,
    postContact: postContact
};