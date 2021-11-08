const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const {isLoggedIn} = require('../middleware');

router.get('/card/user',isLoggedIn,async(req,res)=>{
    const userid = req.user._id;
    const user = await User.findById(userid).populate('cart');
    res.render('cart/usercart',{cart:user.cart});
})


router.get('/cart/:productId/add',isLoggedIn,async(req,res)=>{
    const {productId} = req.params;
    console.log(productId);
    const product  = await Product.findById(productId);
    const user = req.user;
    user.cart.push(product);
    await user.save();
    res.redirect('/card/user');
})

router.delete('/user/:userid/cart/:id', async(req, res) => {

    const { userid, id } = req.params;
    await User.findByIdAndUpdate(userid,{$pull:{cart:id}})
    res.redirect('/card/user');
})


module.exports = router;