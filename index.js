if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const seedDB = require('./seed');



const productRoutes = require('./routes/productRoutes');  
const authRoutes = require('./routes/authRoute');
const cartRoutes = require('./routes/cartRoutes');


const session = require('express-session');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const passport = require('passport');
const sessionConfig = {
    secret: 'just a secret',
    resave: true,
    saveUnitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log(err);
})
// seeding the DB -> running the dummy DB
//seedDB(); 


//routes
  



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// intialising the passport and session for storing the user info
app.use(passport.initialize());
app.use(passport.session()); 

//

passport.use(new LocalStrategy(User.authenticate()));

// session in and out 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
     res.locals.error = req.flash('error');
     res.locals.currentUser = req.user;
    next();
})


app.get('/',(req,res)=>{
    res.render('home');
});

app.use(cartRoutes);
app.use(productRoutes);
app.use(authRoutes);


var port = process.env.PORT || 3000; 
app.listen(port, ()=>{
    console.log("Express server listen on port %d in %s mode",
    this.address().port,
    app.settings.env);
});
