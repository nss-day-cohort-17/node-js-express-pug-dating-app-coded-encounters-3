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

//checks profile table for matching email address
const returnUserFromProfileTable = (email) => {
  return knex('profile').where('email', email)
    .then((user) => {
      console.log('returnUserFromProfileTable', user.toJSON())
      return user.toJSON();
    })


}


//validates user email then sets currentuser table to that user
const checkforCurrentUser = (email) => {

  return Currentuser.forge().fetch().then((user) => {
    //does currentuser table email match login email
    if (user.email === email) {
      returnUserFromProfileTable().then((user) => {
        //set currentuser table to the user who just 'logged in'
        Currentuser.forge(user).save()
          .then((user) => {
            console.log(user.toJSON())
          })
      })
    }

  })
}

module.exports = { User, Currentuser, returnCurrentUser };
