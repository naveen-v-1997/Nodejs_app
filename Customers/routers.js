const  express =  require('express');
const { set } = require('mongoose');
const router = express.Router();

const customers = require('../models/cust')

router.get('/', async function(req,res){
    try{
       
        const result = await customers.find();
        res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
});

router.post('/',async function(req,res){
    
    const Newcust = new  customers({
         EmployeeID : req.body.EmployeeID,
         FirstName : req.body.FirstName,
         Title: req.body.Title,
         TitleOfCourtesy: req.body.TitleOfCourtesy,
         BirthDate: req.body.BirthDate,
         HireDate:req.body.HireDate,
         Address:req.body.Address,
         City:req.body.City,
         Region: req.body.Region,
         PostalCode: req.body.PostalCode,
         Country: req.body.Country,
         HomePhone: req.body.HomePhone,
         Extension:req.body.Extension,
         Photo:req.body.Photo,
         Notes: req.body.Notes,
         ReportsTo: req.body.ReportsTo,
         PhotoPath: req.body.PhotoPath
    })
        
    
    try{
        const result = await Newcust.save();
        res.send(result);
            }
    catch(err){
        console.log(err);
    }
})

router.get('/Firstname',async function(req,res){    
    try{
            const result = await customers.find({},{FirstName:1,_id:0});
            res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
})

router.get('/LastName',async function(req,res){    
    try{
            const result = await customers.find({},{LastName:1,_id:0});
            res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
})

router.patch('/',async function(req,res){
    if(req.query.FirstName)
    {
        var firstname = req.query.FirstName;
        try{
            const result = await customers.update({FirstName:firstname},{FirstName :req.body.FirstName});
            res.send(result);
        }
        catch(err){
            console.log(err);
        }
    }
    if(req.query.LastName)
    {
        var lastName = req.query.LastName;
        try{
            const result = await customers.update({LastName:lastName},{LastName :req.body.LastName});
            res.send(result);
        }
        catch(err){
            console.log(err);
        }
    }
    
    
    
})

router.delete('/',async function(req,res){    
    try{
            const result = await customers.remove({FirstName:req.query.FirstName});
            res.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
})



module.exports = router