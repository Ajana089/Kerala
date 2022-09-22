const mongoose=require("mongoose");
//mongoose.connect('mongodb+srv://ajana:yfr4FxcMdQkwZfOV@cluster0.u9imcoi.mongodb.net/employeedb');
const url = "mongodb+srv://ajana:dggh7WQ5bMGXh4gl@cluster0.9bfk18y.mongodb.net/employeedb?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); 
console.log("strtedserver")
const Schema=mongoose.Schema;
const Product=new Schema({
   
   

 id:String,
 name:String,
 location:String,
 salary:Number

}
)
const productlist=mongoose.model('product',Product);
module.exports=productlist;
