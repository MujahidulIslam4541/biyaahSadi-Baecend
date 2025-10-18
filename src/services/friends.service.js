const httpStatus = require("http-status");
const {  friends } = require("../models");
const ApiError = require("../utils/ApiError");

const createFriendReq = async (userId,profileId) => {
     const friend= await isFriendCheck(userId,profileId)
     console.log(friend)
     if(friend){
               throw new ApiError(httpStatus.CONFLICT, "Your are already Friend");
     }

     const friendReq =await friends.create({
     sender:userId,
     receiver: profileId          
     })
return friendReq
}

const getFriendReqList= async (userId) =>{
const friendReqList = await friends.find({sender:userId,status:"pending"}).populate("sender receiver")
return friendReqList;
}


const isFriendCheck = async (userId,profileId) =>{
const friend =await friends.findOne({
      $or: [
        { sender: userId, receiver: profileId },
        { sender: profileId, receiver: userId }
      ]
    });
    return friend;
}

module.exports = {
       createFriendReq,
       getFriendReqList
};
