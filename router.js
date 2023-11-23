var express = require("express");
var router = express.Router();

const credencial = {
  email: 'mzayed9745@gmail.com',
  password: 'zayed123'
}

//login user
router.post('/login', (req, res) => {
    if (req.body.email === credencial.email && req.body.password === credencial.password) {
        req.session.user = req.body.email;
        res.redirect("/route/dashboard");
    }
});

//route for dashboard
router.get('/dashboard',(req, res) => {
    if (req.session.user) {
          res.render('dashboard',{user:req.session.user})
      }else{
        res.redirect('/')
      }
})

//route for logout 
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.send(err);
        }else{
            res.redirect('/');
        }
    })
})


module.exports = router;
