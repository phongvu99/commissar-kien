const router = require('express').Router();

const indexController = require('../controllers');

router.get('/', indexController.getIndex);

router.post('/contact', indexController.postContact);

module.exports = router;