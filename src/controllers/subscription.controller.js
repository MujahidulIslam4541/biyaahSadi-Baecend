const { subscriptionService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const createSubscription = catchAsync(async (req, res) => {
  const createdBy = req.user._id; 
  const subscriptionData = { ...req.body, createdBy };

  const data = await subscriptionService.createSubscription(subscriptionData);

  res.status(httpStatus.CREATED).json({
    message: "Subscription created successfully",
    status: "OK",
    statusCode: httpStatus.CREATED,
    data,
  });
});

module.exports = { createSubscription };
