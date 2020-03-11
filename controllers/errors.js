const show_404 = (req, res, next) => {
    res.status(404).render('errors/404.ejs', {
        pageTitle: '404: Page Not Found',
        path: '/404'
    });
};

module.exports = {
    show_404: show_404
};