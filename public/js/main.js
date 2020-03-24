$('a[href*="#"]').click(function (event) {
    event.preventDefault();
    const target = $(this.hash);
    hash = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top - 80
    }, 1500, () => {
        window.location.hash = hash;
    });
});

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

let widgetId1;
let widgetId2;

window.expiredCallback = () => {
     document.getElementById('send').disabled = true;
}

if (!window.onloadCallback) {
    window.onloadCallback = () => {
        grecaptcha.render('recaptcha', {
            'sitekey': '6LfsE-EUAAAAABzIrJtYlLLeCRppvZYjPRJPmCAl',
            'callback': verifyCallback,
            'theme': 'dark',
            'size': 'compact',
            'expired-callback': 'expiredCallback'
        });
    };
}
