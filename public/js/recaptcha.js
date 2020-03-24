const axios = require('axios').default;

const secret = '6LfsE-EUAAAAAG5JhUvn3lJlgMlzDmVaVYpuVLEl';

if (!window.verifyCallback) {
    window.verifyCallback = async function (token) {
        const formData = new FormData();
        formData.append('recaptcha-token', token);
        try {
            const sendElement = this.document.getElementById('send');
            const corsAnywhere = 'https://rocky-dusk-94246.herokuapp.com/';
            this.console.log('Token', token);
            this.console.log('Secret', secret);
            formData.append('secret', secret);
            formData.append('response', token);
            sendElement.innerHTML = 'Please wait...'
            const response = await axios({
                method: 'POST',
                url: `${corsAnywhere}https://www.google.com/recaptcha/api/siteverify`,
                data: formData
            }, {
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                //     'Accept': '*/*',
                // }
            });
            if (response.data.success === true) {
                sendElement.disabled = false;
                sendElement.innerHTML = 'Send'
            }
            console.log('Response', response);
        } catch (err) {
            this.console.log('Error', err);
        }
    };
}