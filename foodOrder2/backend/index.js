const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 8000;
const app = express();
require("./db/connection");

const OrderItem = require("./models/food_order.js");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// sending JSON data 
/*fs.readFile('data.json','utf-8',(err,data)=>
   {
   const objData=JSON.parse(data)
   // console.log(data)
    app.get("/",(req,res)=>{
      res.send(data);
   })
   })*/


app.get("/", async (req,res)=>{
   const items = await OrderItem.find();
   res.send(items);
})

app.post("/addItem",async(req,res)=>{
      try {
           /* const OrderItems  = new OrderItem({
               addItem:req.body.addItem,
               removeItem:req.body.removeItem,
               clearAllItem:req.body.clearAllItem
              }); */
               const OrderItems  = new OrderItem({
               name:req.body.name,
               img:req.body.img,
               price:req.body.price,
               description:req.body.description
              }); 
              const item1 = await OrderItems.save();
              res.status(201).json(item1);
              console.log(item1);
            
      } catch (error) {
         console.log(error);
         res.status(500).send(error);
      }
   })
   
// delete  item from database 
app.delete("/removeItem",async(req,res)=>{
   try {
      const id = req.body._id;
      const deleted_item = await OrderItem.findByIdAndRemove(id).exec();
         res.status(201).json({"result" : "success" });
         console.log(item_1);
   } catch (error) {
      res.status(500).send(error);
      console.log(error);
   }
})

app.delete("/clearItem",async(req,res)=>{
   try {
      const deleted_item = await OrderItem.remove();
         res.status(201).json({"result" : "success" });
         console.log(deleted_item);
         console.log("All Items removed");
   } catch (error) {
      res.status(500).send(error);
      console.log(error);
   }
})



app.listen(port,()=>console.log(`server is running at ${port}`))