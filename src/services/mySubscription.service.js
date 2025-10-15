// const { MySubscription } = require("../models")

const { MySubscription } = require("../models/mySubscription.model")

const createMySubscriptionService=async(data)=>{
    return await MySubscription.create(data)
}

module.exports={createMySubscriptionService}