const route = require('express').Router()
const newsCtrl = require('../controllers/news')

route.get('/', async (req, res) => {
  if (req.session && req.session.useremail) {
    return res.redirect('/usedcarsindelhi/hyundaicreta')
  } else {
    res.redirect('/login1')
  }

})

module.exports = route