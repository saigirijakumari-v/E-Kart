// Imported required packages
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

// MongoDB Databse url
var mongoDatabase = 'mongodb://localhost:27017/ekart';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
() => { console.log('Database is connected') },
err => { console.log('There is problem while connecting database ' + err) }
);

// All the express routes
const productRoutes = require('C:/Users/vgirijak/OneDrive - Capgemini/Desktop/Ekart/backend/Routes/Product.route.js');
const supplierRoutes = require('C:/Users/vgirijak/OneDrive - Capgemini/Desktop/Ekart/backend/Routes/Supplier.route.js');
const adminRoutes = require('C:/Users/vgirijak/OneDrive - Capgemini/Desktop/Ekart/backend/Routes/Admin.route.js');
const orderRoutes = require('C:/Users/vgirijak/OneDrive - Capgemini/Desktop/Ekart/backend/Routes/Order.route.js');
// Convert incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 8000;

// Routes Configuration
app.use('/products', productRoutes);
app.use('/suppliers',supplierRoutes);
app.use('/admins',adminRoutes);
app.use('/orders',orderRoutes);

// Staring our express server
const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});