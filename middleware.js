const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','You need to loggin first to proceed');
        return res.redirect('/login');
    }
    next();
}

module.exports = {
    isLoggedIn
}