const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const {isLoggedIn} = require('../middleware');

// to get all product
router.get('/product',async(req,res)=>{
    const product = await Product.find({});
    res.render('index',{product});
})
//get the form for a new product

router.get('/product/new',isLoggedIn,(req,res)=>{
    res.render('products/new');
});

// create an new product
router.post('/product',isLoggedIn,async(req,res)=>{
    const newProduct = req.body;
    //console.log(newProduct);
    await Product.create(newProduct);
    req.flash('success','Product Created Succesfully');
    res.redirect('/product');
})
// got to show products
router.get('/product/:id',async(req,res)=>{
    const {id} = req.params;
    const product =  await Product.findById(id).populate('reviews');
    
    res.render("products/show",{product});
})

// edit the product
router.get('/product/:id/edit',async(req,res)=>{
   
    const {id} = req.params;
    const product = await Product.findById(id);
   
    res.render('products/edit',{product});
})

// getting the edited product and storing it
router.patch('/product/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndUpdate(id,req.body);
    req.flash('success','updated the product successfullsy');
    res.redirect(`/product/${id}`);
})

// deleting the elements

router.delete('/product/:id',isLoggedIn,async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/product');
})

// creating review
router.post('/product/:id/review',isLoggedIn,async(req,res)=>{
   
    const {id} = req.params;
    const {rating,comment} = req.body;
    const review = new Review({rating:rating,comment:comment,user:req.user.username});
    
    const product = await  Product.findById(id);
    product.reviews.push(review);
    await review.save();
    await product.save();


    res.redirect(`/product/${id}`);
})

// deleting review
router.delete('/product/:productid/review/:reviewid',isLoggedIn,async (req,res)=>{
    const {productid,reviewid} = req.params; 
    await Product.findByIdAndUpdate(productid,{$pull:{reviews:reviewid}});
    await Review.findByIdAndDelete(reviewid);
    res.redirect(`/product/${productid}`);
})

module.exports=router;