var express =require("express")
var router=express.Router();

const studentController=require("../controllers/studentController");
router.get("/info",studentController.stuinfo);

router.get("/fees",studentController.stufees);

router.get("/result",studentController.sturesult);

module.exports=router;