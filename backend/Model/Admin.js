const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 // List of columns for Admin schema
 let Admin = new Schema({
   username:{
      type:String
   },
    password: {
    type: String
    }
 },{
 collection: 'admins'
 });


 
 module.exports = mongoose.model('Admin', Admin);