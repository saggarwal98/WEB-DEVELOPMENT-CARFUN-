const route = require('express').Router()
const userCtrl = require('../controllers/user')

route.get('/', (req, res) => {

  res.render('login')

})

route.post('/', async (req, res) => {

  const user = await userCtrl.getUser(req.body.email)

  if (!user) {
    return res.redirect('/')
  }

  if (user.password === req.body.password) {
    req.session.useremail = req.body.email
   // localStorage.setItem("lastname", "Smith");
   //  if(window.localStorage){
   //   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
   //  }

  
    return res.redirect('/')
  } else {
    res.redirect('/login')
  }

})

module.exports = route