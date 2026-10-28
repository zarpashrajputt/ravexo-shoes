import express from "express";

import {
  productController,
  editProductController,
  deleteProductController
} from "../../controllers/admin/productController.js";

const router = express.Router();

// ADD PRODUCT
router.post("/", productController);

// UPDATE PRODUCT
router.post("/edit", editProductController);

// DELETE PRODUCT
router.delete("/", deleteProductController);

export default router;