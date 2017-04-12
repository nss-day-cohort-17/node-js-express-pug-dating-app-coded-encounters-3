'use strict';

const User = require('../models/user')

module.exports.create = ({body: {name, age, photo, description, hobbies, phone, email}}, res) => {
  .then() => {
    res.redirect('myProfile')
  }
}
