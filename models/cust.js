const mongo = require('mongoose');

const sampleschema = new mongo.Schema({},{strict:false});  
const customers = mongo.model('customer_poc',sampleschema,'customer_poc');

module.exports = customers;