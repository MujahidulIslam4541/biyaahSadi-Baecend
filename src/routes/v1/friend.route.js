const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const {friendController} = require("../../controllers");


const router = express.Router();

router.route("/").post(auth("user"), friendController.createFriendReq);  
router.route("/req").get(auth("user"), friendController.getFriendReqList);  

module.exports = router;
