const route = require('express').Router()
const view = document.getElementById('#view')



route.get('/', async (req, res) => {

  if (req.session && req.session.useremail) {
    res.redirect('/usedcarsindelhi/hyundaicreta')
   } else {
    res.redirect('/login')
  }


})


module.exports = route