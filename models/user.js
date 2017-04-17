'use strict'

const { bookshelf, knex } = require('../db/database');
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
      console.log("this is the user", user.toJSON())
      return user.toJSON();
    });
}

//checks profile table for matching email address
const returnUserFromProfileTable = (email) => {
  console.log("inside return user", email)
  return knex('profile').where('email', email)
    .then((user) => {
      console.log("successful return from user ")
      console.log('returnUserFromProfileTable', user)
      return user;
    })
    .catch((err) => {console.log("err from catch", err)})

}


//validates user email then sets currentuser table to that user
const checkforCurrentUser = (email) => {
  console.log("starting check for current user")
  return Currentuser.forge().fetch().then((user) => {
    user = user.toJSON()
    console.log("this is the fetch user", user.email)
    //does currentuser table email match login email
    console.log("successful fetch from current user")
    if (user.email === email) {
      console.log("email matched", email)
      returnUserFromProfileTable(email)
      .then((profileUser) => {
        console.log("found user in profile table",  profileUser[0])
          user = profileUser[0].anonymous
          user.id = null
        //set currentuser table to the user who just 'logged in'
        Currentuser.forge(user).save()
          .then((user) => {
            return user.toJSON()
            console.log(user.toJSON())
          })
          .catch((err) => {
            console.log("err from last catch", err)
          })
      })
    }

  })
}

module.exports = { User, Currentuser, returnCurrentUser, checkforCurrentUser };
