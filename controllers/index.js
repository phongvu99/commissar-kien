const getIndex = (req, res, next) => {
    res.render('./index.ejs', {
        pageTitle: 'The Anh | 3D Animator, Art, Writer, Life'
    });
};

module.exports = {
    getIndex: getIndex
};