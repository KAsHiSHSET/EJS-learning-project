const express=require("express");
const app=express();
const port=3000;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
/*app.get("/",(req,res)=>{
    res.render("home.ejs");
})*/
/*app.get("/hello",(req,res)=>{
    res.send("ello");
})*/
// app.get("/rolldice",(req,res)=>{
//     res.render("rolldice.ejs");
// })
//suppose it is coming from db,passing data to ejs

/*app.get("/rolldice",(req,res)=>{
    let randomNumber=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:randomNumber});
})
//to make insta ejs
app.get("/ig/:username",(req,res)=>{
    const followers=["kashi","mahaak","payal","madhubala"];
    const {username}=req.params;
    // res.send(`${username}`);
    res.render("insta.ejs",{username:username,followers:followers});
})*/
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    console.log(data);
    res.render("instagram.ejs",{data});
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.send("User not found");
    }
})