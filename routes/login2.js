const route = require('express').Router()
const userCtrl = require('../controllers/user')

route.get('/', (req, res) => {

  res.render('login2')

})

route.post('/', async (req, res) => {

  const user = await userCtrl.getUser(req.body.email)

  if (!user) {
    return res.redirect('/signup')
  }

  if (user.password === req.body.password) {
    req.session.useremail = req.body.email
    return res.redirect('/feed2')
  } else {
    res.redirect('/login2')
  }

})

module.exports = route