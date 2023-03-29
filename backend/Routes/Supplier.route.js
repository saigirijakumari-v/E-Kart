// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const supplierRoute = express.Router();
const mongodb = require("mongodb")

// Supplier module which is required and imported
let supplierModel = require('../Model/Supplier');

  // Validating supplier login
  supplierRoute.route('/validateSupplier').post(function (req, res) {
   const { email,password } = req.body;
   //  let email = req.params.email;
   //  let password = req.params.password;
    supplierModel.findOne({email:email},(err,supplier)=>{
      if(err){
         console.log(err);
      }
      if(supplier){
         if(password === supplier.password){
            res.send("Login Successful");
         }
      else{
         res.send("wrong credentials")
           }
        }else{
            res.send("Supplier Not found")
        }
    })
  })

  //Supplier registration API call
  supplierRoute.route('/registerSupplier').post(function (req, res) {
   const { name,email,password,confirmpassword } = req.body;
   console.log(password,confirmpassword);
   supplierModel.findOne({email:email},(err,supplier)=>{
      console.log(supplier)
      if(supplier){
         console.log("You have already registered");
         res.status(200).json();
      }
      else{
         if(password===confirmpassword){
            let supplier = new supplierModel(req.body);
            supplier.save()
            .then(()=>res.send("success"))
            .catch(err => {
               console.log(("Something Went Wrong"));
            res.status(400).json();
         });
         }
       else{
         res.status(200).json();
         }
        }
    })
   
   //  let email = req.params.email;
   //  let password = req.params.password;
   // let supplier = new supplierModel(req.body);
   
  })
module.exports = supplierRoute;