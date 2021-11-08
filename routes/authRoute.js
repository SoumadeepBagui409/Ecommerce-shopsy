const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
// router.get('/fakeUser',async(req,res)=>{
//     const user = new User({
//         username:'souma',
//         email: 'souma@gmail.com'
//     });
//     const newUser = await User.register(user,'1234');
//     res.send(newUser);   
// });




// singup a user or register a user
router.get('/signup',(req,res)=>{
    res.render('./authPage/signup.ejs');
})
// registering the user in data base
router.post('/register',async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const user = new User({
            username:username,
            email:email
        });
         await User.register(user,password);
        // res.send("User created successfully");
        req.flash('success',`welcome ${username}, You have register successfully`);
        res.redirect('./login');
    }catch(e){
        req.flash('error',e.message);
        res.redirect('/signup');
    }
    
});

router.get('/login',async(req,res)=>{
    res.render('authPage/login');
});

router.post('/login',
passport.authenticate('local',
{
    faliureRedirect: '/login',
    failureFlash:true

}),(req,res)=>{
    const {username} = req.user;
    req.flash('success',`Welcome back ${username}`);
    res.redirect('/product');
}); 

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success',`you have logged out successfully`);
    res.redirect('/login'); 
})

module.exports = router;