'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flash = require('express-flash');

const session = require('express-session')
// const passport = require('passport');
// const session = require('express-session')
const passport = require('passport');

const KnexSessionStore = require('connect-session-knex')(session);
const { knex } = require('./db/database');
const routes = require('./routes/')

// Pug
app.set('view engine', 'pug');
app.locals.appname = "💞 Coded Encounters 💞";
app.locals.errors = {};
app.locals.body = {};

// Global variables will go here
// ie app.locals.example = anything

// Middleware

// This is where auth will go eventually.
app.use(express.static('public'));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'codedencounterskey'
}));
app.use(flash());
app.use(bodyParser.urlencoded( {extended: false}))
app.use(routes);
app.use((req,res) => {
  res.render('index')
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
