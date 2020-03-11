$('a[href*="#"]').click(function (event) {
    // event.preventDefault();
    const target = $(this.hash);
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1500);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});