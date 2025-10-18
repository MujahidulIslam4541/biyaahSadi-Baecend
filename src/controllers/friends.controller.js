const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { friendService } = require('../services');


const createFriendReq = catchAsync(async (req, res) => {
  const userId =  req.user.id;
  console.log(req.query.id)

  const friend = await friendService.createFriendReq(userId,req.query.id);
  res.status(httpStatus.CREATED).json(
    response({
      message: "friend Request Sent successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: friend,
    })
  );
});

const getFriendReqList = catchAsync(async (req, res) => {
  const userId =  req.user.id;
  const friend = await friendService.getFriendReqList(userId);
  res.status(httpStatus.CREATED).json(
    response({
      message: "All friend Request",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: friend,
    })
  );
});

module.exports = {
  createFriendReq,
  getFriendReqList
};
