const Subscription = require("../models/subscription.model");

const createSubscription = async (data) => {
  return await Subscription.create(data);
};

const getAllSubscriptions = async () => {
  return await Subscription.find().sort({ createdAt: -1 });
};

const getSubscriptionById = async (id) => {
  return await Subscription.findById(id);
};

const updateSubscription = async (id, data) => {
  return await Subscription.findByIdAndUpdate(id, data, { new: true });
};

const deleteSubscription = async (id) => {
  return await Subscription.findByIdAndDelete(id);
};

module.exports = {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
};
