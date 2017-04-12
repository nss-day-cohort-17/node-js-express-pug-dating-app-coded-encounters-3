'use strict';

const CreateProfile = require('../models/user');
const { knex } = require('../db/database')
// data
// data
const getProfile = () =>
  Profile().select()
  .then( (rows) => rows )
  .catch( (error) => {
    throw error
  })

module.exports.show = (req, res, err) =>
  Promise.all([getProfile()])
  .then(([profile]) =>
    res.render('create-profile')
  ).catch(err)


module.exports.create = (req, res, err) => {
  CreateProfile.forge(req.body)
    .save()
    .then( (profileObj) => {
      req.flash('profileMsg', 'You have created a profile!')
      res.redirect('/') // eventually redirect to user page
    })
    .catch( (err) => {
      Promise.all([
        Promise.resolve(err),
        getProfile()
        ])
    })
    .catch(err)
}
