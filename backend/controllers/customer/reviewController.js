import Review from "../../models/customer/review.js";

// ADD REVIEW - POST
export const reviewController = (req, res) => {
  const {
    reviewOrderId,
    reviewProduct,
    reviewRating,
    reviewComment
  } = req.body;

  const newReview = new Review({
    reviewOrderId: reviewOrderId,
    reviewProduct: reviewProduct,
    reviewRating: reviewRating,
    reviewComment: reviewComment
  });

  newReview.save()
    .then(() => res.status(201).send("Review saved successfully"))
    .catch((error) => res.status(500).send("Error saving review: " + error));
};


// UPDATE REVIEW
export const updateReviewController = (req, res) => {
  const {
    id,
    reviewOrderId,
    reviewProduct,
    reviewRating,
    reviewComment
  } = req.body;

  Review.findByIdAndUpdate(
    id,
    {
      reviewOrderId: reviewOrderId,
      reviewProduct: reviewProduct,
      reviewRating: reviewRating,
      reviewComment: reviewComment
    },
    { runValidators: true }
  )
    .then((review) => {
      if (!review) {
        return res.status(404).send("Review not found");
      }

      res.status(200).send("Review updated successfully");
    })
    .catch((error) =>
      res.status(500).send("Error updating review: " + error)
    );
};


// DELETE REVIEW
export const deleteReviewController = (req, res) => {
  const { id } = req.body;

  Review.findByIdAndDelete(id)
    .then((review) => {
      if (!review) {
        return res.status(404).send("Review not found");
      }

      res.status(200).send("Review deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting review: " + error)
    );
};