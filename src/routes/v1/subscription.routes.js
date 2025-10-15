const express = require("express");
const auth = require("../../middlewares/auth");
const { subscriptionController } = require("../../controllers");

const router = express.Router();

router.route('/create').post(auth(),subscriptionController.createSubscription)

module.exports=router;