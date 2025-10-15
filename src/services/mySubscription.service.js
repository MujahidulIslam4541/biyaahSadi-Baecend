const { MySubscription } = require("../models/mySubscription.model");

// Create MySubscription
const createMySubscriptionService = async (data) => {
  return await MySubscription.create(data);
};

// Get MySubscriptions (by user)
const getMySubscriptionsService = async (userId) => {
  return await MySubscription.find({ userId }).populate("subscriptionId");
};

module.exports = {
  createMySubscriptionService,
  getMySubscriptionsService,
};
