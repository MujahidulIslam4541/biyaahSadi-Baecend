const express = require("express");
const auth = require("../../middlewares/auth");
const {friendsController} = require("../../controllers");


const router = express.Router();

router.route("/").post(auth("user"), friendsController.createFriendReq);  
router.route("/req").get(auth("user"), friendsController.getFriendReqList);  

module.exports = router;
