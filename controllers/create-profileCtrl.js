'use strict';

const { User, Currentuser } = require('../models/user');
const { knex } = require('../db/database')


module.exports.show = (req, res) => {
  res.render('create-profile');
}


//this function does 2 things:
//1. saves profile info to Profile Table,
//2. deletes everything from currentuser table then adds the current user info
module.exports.create = (req, res, err) => {
console.log(req.body)
User.forge(req.body)
  .save() //saved to profile table
  .then((profileObj) => {
    console.log(req.body)
  console.log("createuser: deleting the user")
  knex('currentuser').where('id', null) //deletes only row which exists in currentuser table
    .del()
    .then(() => {
      console.log("createUser: forging,then save")
      Currentuser.forge(req.body)
        .save() //saves current sign in to  currentuser table
        .then( (currentuserobj) => {
          console.log(" save succcess!!")
          req.flash('profileMsg', 'You have created a profile!')
          res.redirect('/myProfile') // eventually redirect to user page
        })
    })
    // req.flash('profileMsg', 'You have created a profile!')
      // res.redirect('/') // eventually redirect to user page
  })

}
  // .catch((err) => {
//   console.log(err)
//   res.render('create-profile')
// })
