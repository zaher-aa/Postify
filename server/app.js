const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const { join } = require('path');

const router = require('./routes');

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '../public')));
app.set('port', process.env.PORT || 3000);
app.use(router);

module.exports = app;
