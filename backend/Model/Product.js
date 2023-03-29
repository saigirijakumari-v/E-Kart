const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let Product = new Schema({
    category: {
    type: String
    },
    name: {
    type: String,
    unique: true
    },
    price: {
    type: Number
    },
    description: {
    type: String
    },
    quantity: {
    type: Number
    },
    photo:{
      type:String
    }
 },{
 collection: 'products'
 });
 
 module.exports = mongoose.model('Product', Product);