const { Console } = require('console');
const express = require('express');
const mongo = require('mongoose');

const app = express();

var url = "mongodb+srv://Naveen:POC@cluster0.etk6j.mongodb.net/firstDB?retryWrites=true&w=majority";

mongo.connect(url,{useNewUrlPaser:true});

const conn = mongo.connection


conn.on('open',function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected...");
    }
});

app.use(express.json());

const custrouters = require('./Customers/routers')
app.use('/customers',custrouters);

app.listen(8080,() =>{
    console.log("Server is running on port 8080 ..." );
})



