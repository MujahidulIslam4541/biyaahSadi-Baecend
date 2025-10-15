const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  days: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
}, { timestamps: true });

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
