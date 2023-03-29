// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const productRoute = express.Router();
const mongodb = require("mongodb")

// Product module which is required and imported
let productModel = require('../Model/Product');

// To Add New Product 

productRoute.route('/addProduct').post(function (req, res) {
  //  console.log(req.body);
   let product = new productModel(req.body);
   product.save()
   .then(() => {
    // console.log("success");
   res.send("success");
   })
   .catch(err => {
    // console.log("failed");
   res.status(200).json();
   });
   });

//To view Products

productRoute.route('/viewProducts').get(function (req, res) {
   productModel.find(function (err, product) {
   if (err) {
   console.log(err);
   }
   else {
      res.json(product);
   }
   });
   });

 // To Delete The Product
 productRoute.route('/deleteProduct/:id').get(function (req, res) {
   console.log(req.params.id);
 productModel.findByIdAndRemove({ _id: new mongodb.ObjectId(req.params.id) }, 
 function (err, product) {
   console.log(req.params.id);
 if (err){
   res.json(err);
   console.log(err);
 } 
 else{
   res.json('Product Deleted Successfully');
 }
 });
 });

  // To Get Product Details By Product ID
  productRoute.route('/editProduct/:id').get(function (req, res) {
    let id = new mongodb.ObjectId(req.params.id);
    productModel.findById(id, function (err, product) {
    res.json(product);
    });
    });

 // To Update The Product Details based on the ID
 productRoute.route('/updateProduct/:id').post(function (req, res) {
 productModel.findById(new mongodb.ObjectId(req.params.id), function (err, product) {
 if (!product)
 return next(new Error('Unable To Find Product With This Id'));
 else {
 product.category = req.body.category;
 product.name = req.body.name;
 product.description = req.body.description;
 product.quantity = req.body.quantity;
 product.price = req.body.price;
 product.photo = req.body.photo;
 product.save().then(emp => {
 res.json('Product Updated Successfully');
 })
 .catch(err => {
 res.status(200).json();
 });
 }
 });
 });

module.exports = productRoute;