const { login, signup } = require('../controllers/authcontroller');
const { loginvalidation, signupvalidation } = require('../middlewares/authvalidation');

const router = require('express').Router() ;

// router.post('/login' , (req , res) => {
//     res.send('login ✅') ;
// }) ;

// router.post('/signup' , (req , res) => {
//     res.send('signup ✅') ;
// }) ;

router.post('/login' , loginvalidation , login) ;
router.post('/signup' , signupvalidation , signup) ;
module.exports = router ;