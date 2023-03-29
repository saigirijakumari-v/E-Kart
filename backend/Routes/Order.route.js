// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const orderRoute = express.Router();
const mongodb = require("mongodb")

// Product module which is required and imported
let orderModel = require('../Model/Order');

//To view Products

orderRoute.route('/viewOrders').get(function (req, res) {
    orderModel.find(function (err, order) {
    if (err) {
    console.log(err);
    }
    else {
       res.json(order);
    }
    });
    });

module.exports = orderRoute;