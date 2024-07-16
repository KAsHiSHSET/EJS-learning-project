//express ek function hai 
const express = require('express');
//yeh function hume kuchh return karayega aur hum usse  app naam ke folder mai m store karayenge
//server side ki web application , vo isssi ke through bbanegi 
//app is object which has methods
const app = express();
//to know the methods in app
// console.dir(app);
//express helps to listen to call
//3000 is custom server
//yeh listen  ek app server banayega , jo incoming api request ko listen karega
//port khulte hi callback hoga
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
//abb server listen karta rahega
//isse hume pata lag gya ki requst aa rhi hai, hospscoth se send kari
/*app.use((req,res)=>{
    //jo req aa rhi hai usse print kara lo
    // console.log(req);
    console.log("request received");
    //response mai hum bhej rahe hai message on portal 3000
    // res.send("Hello World");
    res.send({
        message:"hi",
        name:"sachin",
    });
});*/
/*app.get("/",(req,res)=>{
    res.send({
        message:"hi",
        name:"sachin",
    });
})
app.get("/apple",(req,res)=>{
    res.send("apple");
})
app.get("/mango",(req,res)=>{
    res.send("mango");
})
//kooi inse hut ke path ho
app.get("*",(req,res)=>{
    res.send("404 not found");
})
app.post("/",(req,res)=>{
    res.send("you sent a post request")
})*/
//path parameters
/*app.get("/:username/:id",(req,res)=>{
  const {username,id}=req.params;
  res.send(`welcome to the page of@ ${username} and id is ${id}`);
})*/
//query strings
//reques ki respose mai query string hoga
/*app.get("/search",(req,res)=>{
    //console mai print karne ke liye
  const {q,page}=req.query;
  res.send(`you searched for ${q} on page ${page}`);
})*/

