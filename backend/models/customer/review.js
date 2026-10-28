import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewOrderId: { type: String, required: true },
  reviewProduct: { type: String, required: true },
  reviewRating: { type: Number, required: true },
  reviewComment: { type: String, required: true }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;