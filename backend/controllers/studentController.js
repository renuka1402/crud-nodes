const studentmodel = require("../model/studentmodel");





const stuinfo=async(req,res)=>{
    res.send("Student display data foer bckebd");

}
const stuFees=async(req,res)=>{
    res.send("student fees data")


}
const stuResult=async(req,res)=>{
    res.send("student fees data")


}
const stuinfosave=async(req,res)=>{
  let rollno=req.body.rollno;
  let name=req.body.name;
  let city=req.body.city;
  let fees=req.body.fees;

  const student=new studentmodel({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees,
  })
  student.save();
  res.send("data save!!!!!")
}
module.exports={
    stuinfo,
    stuFees,
    stuResult,
    stuinfosave
}