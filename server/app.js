const { join } = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const compression = require('compression');
const helmet = require('helmet');
const router = require('./routes');

const app = express();

app.use(favicon(join(__dirname, '../public/favicon.ico')));
app.use(compression());
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data:'],
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '../public')));
app.set('port', process.env.PORT || 3000);
app.use(router);

module.exports = app;
