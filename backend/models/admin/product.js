import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  productBrand: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productQuantity: { type: Number, required: true },
  productSizes: { type: String, required: true },
  productCondition: { type: String, required: true },
  productDescription: { type: String, required: true },

  // productImages: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

export default Product;