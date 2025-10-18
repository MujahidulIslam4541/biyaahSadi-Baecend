const mongoose = require("mongoose");

const friendsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      
      enum: ["pending", "accepted", "blocked"],
      default: "pending",
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

const Friend = mongoose.model("Friend", friendsSchema);

module.exports = Friend;
