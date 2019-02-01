const route = require('express').Router()
const newsCtrl = require('../controllers/news')

route.get('/', async (req, res) => {
  if (req.session && req.session.useremail) {
    return res.redirect('/usedcarsindelhi/hyundaiverna')
  } else {
    res.redirect('/login2')
  }

})

module.exports = route