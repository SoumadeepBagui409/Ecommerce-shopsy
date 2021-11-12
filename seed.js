const Product = require('./models/product');
const product =[
    {
        name:"Iphone",
        img:"https://images.unsplash.com/photo-1605457212772-7e5afd088069?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTElMjBwcm8lMjBtYXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:100000,
        desc:"The iPhone design is good and the camera quality is awesome. You can also take pictures in wide angles and the image quality is awesome. Phone got delivered at 9am on 28th September (I pre-order it on 27th September at 3am in the morning)"
    },
    {
        name:"Apple Watch",
        img:"https://images.unsplash.com/photo-1616353329366-b5546ca70b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 30000,
        desc:"Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services."
    },
    {
        name:"Sport shoes",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:6000,
        desc:"Designed for maximum comfort, grip and performance. Fast, free Shipping. Shop our runners, slip-ons, slippers, beanies and more"
    },
    {
        name:"Drones",
        img:"https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyb25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price:20000,
        desc:"Drone with 4K Camera Live Video,WiFi FPV Drone for Adults with 1200 Mah Long Flight time Auto Hover Fold able RC Drone Quad-copter"
    },
    {
        name:"Camera",
        img:"https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 12000,
        desc:"Camera Lenses. Explore new avenues and enhance the performance of your camera by attaching a superior camera lens. From macro lenses to zoom lenses, the collection of lenses available at our online store is sure to meet your photography requirements"
    },
    {
        name:"Smart Television",
        img:"https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB0ZWxldmlzaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 140000,
        desc:"Buy smart led tv online at best prices in India from LG India. Choose from the widest range of Smart Televisions online at best prices"
    },
    {
        name:"Head Phone",
        img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 40000,
        desc:"Our Headphone Finder puts together their top recommendations. In 5 easy steps, find the perfect headphones for you. Begin Here. Home to the World's Finest Brands. The only reason why some names are missing is because they probably sound like crap."
    }
]

const seedDB = async() => {
    await Product.insertMany(product);
    console.log("DB seeded");
}

module.exports = seedDB;