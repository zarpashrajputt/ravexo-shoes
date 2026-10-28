import Product from "../../models/admin/product.js";

// ADD PRODUCT
export const productController = (req, res) => {
  const {
    productId,
    productName,
    productBrand,
    productPrice,
    productQuantity,
    productSizes,
    productCondition,
    productDescription
  } = req.body;

  const newProduct = new Product({
    productId: productId,
    productName: productName,
    productBrand: productBrand,
    productPrice: productPrice,
    productQuantity: productQuantity,
    productSizes: productSizes,
    productCondition: productCondition,
    productDescription: productDescription
  });

  newProduct.save()
    .then(() => res.status(201).send("Product added successfully"))
    .catch((error) => res.status(500).send("Error adding product: " + error));
};


// UPDATE PRODUCT
export const editProductController = (req, res) => {
  const {
    editProductId,
    editProductName,
    editProductBrand,
    editProductPrice,
    editProductQuantity,
    editProductSize,
    editProductCondition,
    editProductDescription
  } = req.body;

  Product.findOneAndUpdate(
    { productId: editProductId },
    {
      productName: editProductName,
      productBrand: editProductBrand,
      productPrice: editProductPrice,
      productQuantity: editProductQuantity,
      productSizes: editProductSize,
      productCondition: editProductCondition,
      productDescription: editProductDescription
    },
    { runValidators: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.status(200).send("Product updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating product: " + error));
};


// DELETE PRODUCT
export const deleteProductController = (req, res) => {
  const { productId } = req.body;

  Product.findOneAndDelete({ productId: productId })
    .then((product) => {
      if (!product) {
        return res.status(404).send("Product not found");
      }

      res.status(200).send("Product deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting product: " + error));
};