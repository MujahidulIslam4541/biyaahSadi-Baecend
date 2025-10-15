const mongoose = require("mongoose");
const mySubscriptionSchema = new mongoose.Schema(
  {
    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    setReminder: {
      type:Number,
    },
    sendMessage: {
      type: String,
    },
  },
  { timestamps: true }
);

const MySubscription = mongoose.model("MySubscription", mySubscriptionSchema);

module.exports={MySubscription}
