var express =require("express")
var router=express.Router();

const teacherController=require("../controllers/tearcherController");
router.get("/info",studentController.stuinfo);

router.get("/detail",teacherController.teacherdetail);
router.get("/sallary",teacherController.teacherSallary);

module.exports=router;