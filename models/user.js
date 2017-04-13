'use strict'

const { bookshelf } = require('../db/database');
// const { compare } = require('bcryptjs'); -AUTH PRIORITY

const User = bookshelf.Model.extend({
  tableName: 'profile',

})

const Currentuser = bookshelf.Model.extend({
  tableName: 'currentuser',

})

module.exports = { User, Currentuser };
