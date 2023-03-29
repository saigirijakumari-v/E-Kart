// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const adminRoute = express.Router();
const mongodb = require("mongodb")

// Admin module which is required and imported
let adminModel = require('../Model/Admin');

  // To login 
  adminRoute.route('/validateAdmin').post(function (req, res) {
   const { username,password } = req.body;
   console.log(username,password);
   //  let email = req.params.email;
   //  let password = req.params.password;
    adminModel.findOne({username:username},(err,admin)=>{
      if(err){
         console.log(err);
      }
      if(admin){
         console.log(admin);
         if(password === admin.password){
            res.send("success");
         }
      else{
         res.send("wrong credentials")
           }
        }else{
            res.send("Admin Not found")
        }
    })
  })
module.exports = adminRoute;