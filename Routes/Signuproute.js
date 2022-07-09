const express = require("express");
const router = express.Router();
const product_controller = require("../Controller/Signupcontroller");

router.get("/test", product_controller.test);
//router.post("/loginnow", product_controller.product_login); 
router.post("/create", product_controller.product_create);


module.exports = router;