const Subscription = require("../models/subscription.model");

const createSubscription = async (data) => {
  const result = await Subscription.create(data);
  return result;
};

module.exports = { createSubscription };
