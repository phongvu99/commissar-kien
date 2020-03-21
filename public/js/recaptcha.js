const axios = require('axios').default;

if (!window.verifyCallback) {
    console.log('tesing');
    window.verifyCallback = async function (token) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formData = new FormData();
        // formData.append('name', name);
        // formData.append('email', email);
        // formData.append('message', message);
        formData.append('recaptcha-token', token);
        try {
            const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
                secret: process.env.RECAPTCHA_SECRET,
                response: token
            });
            // const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            //     body: formData
            // });    
            console.log('Response', response);
        } catch (err) {
            this.console.log('Error', err);
        }
    };
}