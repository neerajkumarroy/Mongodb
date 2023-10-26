const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/college");

const productSchema = new mongoose.Schema({
    name:String,
    Course:String,
    Sem:String,
    Fee:Number
});

app.use(express.json());

app.get("/search/:key", async(req,resp) => {
   const products = mongoose.model("students",productSchema);
   console.log(req.params.key);
   let data = await products.find(
    {
        "$or":
        [
            {"name":{$regex:req.params.key}},
            {"Course":{$regex:req.params.key}}
           
            
           
        ]
    }
   );
   resp.send(data);
   
})

app.listen(6000);