const {
  createMySubscriptionService,
  getMySubscriptionsService,
} = require("../services/mySubscription.service");

const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

// ✅ Create MySubscription
const createSubscription = catchAsync(async (req, res) => {
  const userId = req.user._id; // Auth থেকে নেওয়া ইউজার ID
  const subscriptionData = { ...req.body, userId };

  const result = await createMySubscriptionService(subscriptionData);

  res.status(httpStatus.CREATED).json({
    message: "MySubscription created successfully",
    status: "OK",
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

// ✅ Get All MySubscriptions (only user's own subscriptions)
const getMySubscriptions = catchAsync(async (req, res) => {
  const userId = req.user._id;

  const result = await getMySubscriptionsService(userId);

  res.status(httpStatus.OK).json({
    message: "MySubscriptions fetched successfully",
    status: "OK",
    statusCode: httpStatus.OK,
    data: result,
  });
});

module.exports = {
  createSubscription,
  getMySubscriptions,
};
