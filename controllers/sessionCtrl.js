'use strict'
const { returnCurrentUser } = require('../models/user')
module.exports.show =(req,res) => {
  res.render('myProfile');
}

module.exports.getuser = (req,res,next) => {
  console.log('firing getuser')
  return returnCurrentUser()
  .then((user) => {
    console.log("sessionCtrl user", user)
    if (user) {
      return res.render('myProfile', { user })
    } else {
      console.log("firing next")
      next()
    }

  })
}

// module.exports.checkuser
