const route = require('express').Router()
const newsCtrl = require('../controllers/news')

route.get('/', async (req, res) => {
  if (req.session && req.session.useremail) {
    return res.redirect('/')
  } else {
    res.redirect('/login')
  }

})

module.exports = route