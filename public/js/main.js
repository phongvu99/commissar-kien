$('a[href*="#"]').click(function (event) {
    event.preventDefault();
    const target = $(this.hash);
    hash = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1500, () => {
        window.location.hash = hash;
    });
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

let widgetId1;
let widgetId2;

if (!window.onloadCallback) {
    window.onloadCallback = () => {
        // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
        // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
        // widgetId1 = grecaptcha.render('example1', {
        //     'sitekey': '6LfsE-EUAAAAABzIrJtYlLLeCRppvZYjPRJPmCAl',
        //     'theme': 'light'
        // });
        // widgetId2 = grecaptcha.render(document.getElementById('example2'), {
        //     'sitekey': '6LfsE-EUAAAAABzIrJtYlLLeCRppvZYjPRJPmCAl'
        // });
        grecaptcha.render('recaptcha', {
            'sitekey': '6LfsE-EUAAAAABzIrJtYlLLeCRppvZYjPRJPmCAl',
            'callback': verifyCallback,
            'theme': 'dark'
        });
    };
}
