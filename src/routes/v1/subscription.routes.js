const express = require("express");
const auth = require("../../middlewares/auth");
const { subscriptionController } = require("../../controllers");

const router = express.Router();

router.route('/create').post(auth(),subscriptionController.createSubscription)
router.get("/allSubs", auth(), subscriptionController.getAllSubscriptions);
router.get("/subs/:id", auth(), subscriptionController.getSubscriptionById);
router.patch("/subs/:id", auth(), subscriptionController.updateSubscription);
router.delete("/subs/:id", auth(), subscriptionController.deleteSubscription);

module.exports=router;