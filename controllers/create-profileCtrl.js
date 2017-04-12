'use strict';

const CreateProfile = require('../models/user');
const { knex } = require('../db/database')

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
