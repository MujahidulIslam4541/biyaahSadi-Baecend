const express = require("express");
const auth = require("../../middlewares/auth");
const { mySubscription } = require("../../controllers");


const router = express.Router();

router.route('/create').post(auth(),mySubscription.createSubscription)
module.exports=router;