const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let Order = new Schema({
   name:{
      type:String
   },
    price: {
    type: Number
    },
    quantity:{
    type:Number
    }
 },{
 collection: 'ordersplaced'
 });


 
 module.exports = mongoose.model('Order', Order);