'use strict';

const passport = require('passport');
const { Strategy } = require('passport-local');
const { knex } = require('../db/database');

const User = require('../models/user');

passport.serializeUser( (user, done) => {
  knex()
})
