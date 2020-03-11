require('dotenv').config();

const path = require('path');

const express = require('express');
const favicon = require('serve-favicon');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const errorsController = require('./controllers/errors');

const index = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('./public'));

app.use(index);

app.use(errorsController.show_404);

const PORT = process.env.PORT;

app.listen(PORT || process.env.PORT, () => {
    console.log('App started on port:', PORT);
});

