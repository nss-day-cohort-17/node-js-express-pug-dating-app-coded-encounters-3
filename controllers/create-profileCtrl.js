'use strict';

const User = require('../models/user');
const { knex } = require('../db/database')


module.exports.show =(req,res) => {
  res.render('create-profile');
}

module.exports.create = (req, res, err) => {
  console.log(req.body)
  User.forge(req.body)
    .save()
    .then( (profileObj) => {
      req.flash('profileMsg', 'You have created a profile!')
      // res.redirect('/') // eventually redirect to user page
    })
    .catch( (err) => {
      console.log(err)
      res.render('create-profile')
 })
}
