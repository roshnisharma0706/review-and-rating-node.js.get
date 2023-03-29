const mongoose = require("mongoose")
const reviewSchema = new mongoose.Schema({
    subject: {
        type: String,
        reqire: true,
    },
    review: {
        type: String,
        reqire: true,
    },
    rating: {
        type: String,
        reqire: true,
    },
    isActive: {
        type: String,
        default: true,
    },
    companyid: {
        type: mongoose.Schema.Types.ObjectId, ref: "companyName",
        reqire: true,
    },
    userNameld: {
        type: mongoose.Schema.Types.ObjectId, ref: "userName",
        reqire: true,

    }


})
reviewSchema.set('timestamps', true)
module.exports = mongoose.model("reviewdetails", reviewSchema)