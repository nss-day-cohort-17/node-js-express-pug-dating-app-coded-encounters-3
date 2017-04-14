'use strict'
const { returnCurrentUser, checkforCurrentUser } = require('../models/user')
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

module.exports.checkuser = (req, res, next) => {
	return checkforCurrentUser()
		.then((user) => { // if user redirect to myProfile if no user redirect to login page
			if (user) {
				res.redirect('/myProfile')
			} else {
				res.render('login', {
					msg: 'Email or Password is incorrect.'
				})
			}
		}) .catch((err) => res.render('login', {msg: 'Whoops something went wrong! Try again'}))
}
