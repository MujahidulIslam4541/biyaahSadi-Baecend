const { mySubscriptionService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const createSubscription = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const subscriptionData = { ...req.body, userId };

  const result = await mySubscriptionService.createMySubscriptionService(subscriptionData);

  res.status(httpStatus.CREATED).json({
    message: "MySubscription created successfully",
    status: "OK",
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

module.exports={createSubscription}