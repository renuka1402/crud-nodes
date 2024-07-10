var express=require("express");
var app=express();

var mongoose=require("mongoose")

var cors=require("cors");
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extends:true}))
app.use(bodyparser.json())

mongoose.connect(process.env.DATABASE_UL+process.env.DBNAME)
const PORT=process.env.PORT

var stuRouter=require("./Router/stuRouter");
var teacherRouter=require("./Router/teacherRouter");

app.get("/home",(req,res)=>{
    res.send("data save by backend");
})

app.use("/student",stuRouter);

app.use("/teacher",teacherRouter);

app.listen(PORT,()=>{
    console.log("app run")
})