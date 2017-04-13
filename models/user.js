'use strict'

const { bookshelf } = require('../db/database');
// const { compare } = require('bcryptjs'); -AUTH PRIORITY

const User = bookshelf.Model.extend({
  tableName: 'profile',

})

const Currentuser = bookshelf.Model.extend({
  tableName: 'currentuser',

})

const returnCurrentUser = () => {
  // select * from `currentuser`
  return Currentuser.forge().fetch()
  .then(function(user) {
    // outputs 'Slaughterhouse Five'
    // console.log(model.get('user'));
    console.log("this is the user", user.toJSON())
    return user.toJSON();
  });
}

module.exports = { User, Currentuser, returnCurrentUser };
