const express=require("express");
const app=new express();
const cors=require('cors')
const bodyparser=require('body-parser');
const Product=require('../backend/src/model/user');

app.use(cors());
app.use(bodyparser.json());

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE')
    Product.find()
    .then(function(product){
        res.send(product);
    })
})

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE');
    var products={
        id:req.body.employee.id,
        name:req.body.employee.name,
        location:req.body.employee.location,
        salary:req.body.employee.salary
// id:req.body.id,
// name:req.body.name,
// location:req.body.location,
// salary:req.body.salary

    }
    console.log(product);
   var product= new Product(products);
   product.save();

})
//app.listen(3000,()=>{console.log("server started")});
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Ready on 3000"); 
  });
  