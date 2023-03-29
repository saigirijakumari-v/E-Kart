const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let Supplier = new Schema({
   name:{
      type:String
   },
    email: {
    type: String,
    unique:true,
    required :true
    },
    password: {
    type: String
    },
    confirmPassword:{
      type: String
    }
 },{
 collection: 'suppliers'
 });


 
 module.exports = mongoose.model('Supplier', Supplier);