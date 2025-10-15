const { subscriptionService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

/**
 * @desc Create a new subscription
 */
const createSubscription = catchAsync(async (req, res) => {
  const createdBy = req.user._id;
  const subscriptionData = { ...req.body, createdBy };

  const result = await subscriptionService.createSubscription(subscriptionData);

  res.status(httpStatus.CREATED).json({
    message: "Subscription created successfully",
    status: "OK",
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

/**
 * @desc Get all subscriptions
 */
const getAllSubscriptions = catchAsync(async (req, res) => {
  const result = await subscriptionService.getAllSubscriptions();
  res.status(httpStatus.OK).json({
    message: "All subscriptions fetched successfully",
    status: "OK",
    statusCode: httpStatus.OK,
    data: result,
  });
});

/**
 * @desc Get single subscription by ID
 */
const getSubscriptionById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subscriptionService.getSubscriptionById(id);

  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Subscription not found" });
  }

  res.status(httpStatus.OK).json({
    message: "Subscription fetched successfully",
    status: "OK",
    statusCode: httpStatus.OK,
    data: result,
  });
});

/**
 * @desc Update subscription
 */
const updateSubscription = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedBy = req.user._id;
  const updateData = { ...req.body, updatedBy };

  const result = await subscriptionService.updateSubscription(id, updateData);

  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Subscription not found" });
  }

  res.status(httpStatus.OK).json({
    message: "Subscription updated successfully",
    status: "OK",
    statusCode: httpStatus.OK,
    data: result,
  });
});

/**
 * @desc Delete subscription
 */
const deleteSubscription = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await subscriptionService.deleteSubscription(id);

  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ message: "Subscription not found" });
  }

  res.status(httpStatus.OK).json({
    message: "Subscription deleted successfully",
    status: "OK",
    statusCode: httpStatus.OK,
  });
});

module.exports = {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
};
