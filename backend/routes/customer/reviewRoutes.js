import express from "express";

import {
  reviewController,
  updateReviewController,
  deleteReviewController
} from "../../controllers/customer/reviewController.js";

const router = express.Router();

router.post("/", reviewController);

router.post("/edit", updateReviewController);

router.delete("/", deleteReviewController);

export default router;