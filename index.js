var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');
//mongoose help us structure the mongodb so that data is consistent

var Product = require('./models/product');
var Wishlist = require('./models/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(request, response) {
  var product = new Product();      //mongoose model object created
  product.title = request.body.title;
  product.price = request.body.price;
  //new Product({request.body});
  //new Product({title:request.body.title, price:request.body.price});
  //these do the same thing
  product.save(function(err, savedProduct) {
    if (err) {
      response.status(500).send({error:"Could not save product"});
    } else {
      response.status(200).send(savedProduct);
    }
  })
});

app.get('/product', function(request,response) {
  Product.find({}, function(err, products) {    //asynchronous, happens on different threads
    if(err){
      response.status(500).send({error: "Could not fetch products"});
    } else {
      response.status(200).send(products);
    }
  });
});

app.listen(3000,function(){
  console.log("Swag shop API is running on port 3000.");
});
