const { MySubscription } = require("../models")

const createMySubscriptionService=async(data)=>{
    return await MySubscription.create(data)
}

module.exports={createMySubscriptionService}