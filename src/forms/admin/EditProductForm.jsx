// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for product field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for the editable product fields.
const editProductSchema = z.object({
  // Accept the read-only product ID as text.
  editProductId: z.string().min(1, "Product ID is required"),
  // Require a descriptive product name.
  editProductName: z.string().min(1, "Product name is required").min(2, "Product name must be at least 2 characters").max(100, "Product name must be at most 100 characters"),
  // Require a brand name.
  editProductBrand: z.string().min(1, "Brand is required").max(60, "Brand must be at most 60 characters"),
  // Require a positive product price.
  editProductPrice: z.coerce.number().positive("Price must be greater than zero"),
  // Require a positive whole-number quantity.
  editProductQuantity: z.coerce.number().int("Quantity must be a whole number").min(1, "Quantity must be at least 1"),
  // Require the available shoe sizes.
  editProductSize: z.string().min(1, "Available sizes are required").max(50, "Available sizes must be at most 50 characters"),
  // Limit the condition to the choices shown in the form.
  editProductCondition: z.enum(["new", "like-new", "used"], { message: "Please select a product condition" }),
  // Require a useful product description.
  editProductDescription: z.string().min(1, "Description is required").min(10, "Description must be at least 10 characters").max(1000, "Description must be at most 1000 characters"),
  // Require at least one product image.
  editProductImage: z.any().refine((files) => files && files.length > 0, "At least one image is required"),
});

// This form displays fields for editing a shoe product.
function EditProductForm() {
  // Connect the product schema and empty condition to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(editProductSchema),
    defaultValues: { editProductCondition: "" },
  });
  // Log valid product updates after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  // Return the product editing form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the edit form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as product editing. */}
              <h4 className="text-center mb-4">Edit Product</h4>
              {/* Group the editable product fields and submit button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the product ID label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the product ID input. */}
                  <label htmlFor="editProductId" className="form-label">Product ID</label>
                  {/* Display the product ID without allowing it to be changed. */}
                  <input type="text" className="form-control form-control-lg" id="editProductId" readOnly {...register("editProductId")} />
                  {/* Display validation feedback for the product ID. */}
                  {errors.editProductId && <span className="text-danger">{errors.editProductId.message}</span>}
                </div>
                {/* Keep the product name label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the product name input. */}
                  <label htmlFor="editProductName" className="form-label">Product Name</label>
                  {/* Require an updated product name. */}
                  <input type="text" className="form-control form-control-lg" id="editProductName" {...register("editProductName")} />
                  {/* Display validation feedback for the product name. */}
                  {errors.editProductName && <span className="text-danger">{errors.editProductName.message}</span>}
                </div>
                {/* Keep the brand label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the brand input. */}
                  <label htmlFor="editProductBrand" className="form-label">Brand</label>
                  {/* Require a brand name and provide examples. */}
                  <input type="text" className="form-control form-control-lg" id="editProductBrand" placeholder="e.g. Nike, Adidas" {...register("editProductBrand")} />
                  {/* Display validation feedback for the brand. */}
                  {errors.editProductBrand && <span className="text-danger">{errors.editProductBrand.message}</span>}
                </div>
                {/* Place price and quantity side by side on wider screens. */}
                <div className="row">
                  {/* Give the price field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the product price input. */}
                    <label htmlFor="editProductPrice" className="form-label">Price in PKR</label>
                    {/* Require a non-negative price in rupees and allow decimal values. */}
                    <input type="number" className="form-control form-control-lg" id="editProductPrice" step="0.01" {...register("editProductPrice")} />
                    {/* Display validation feedback for the price. */}
                    {errors.editProductPrice && <span className="text-danger">{errors.editProductPrice.message}</span>}
                  </div>
                  {/* Give the quantity field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the product quantity input. */}
                    <label htmlFor="editProductQuantity" className="form-label">Quantity</label>
                    {/* Require a quantity of at least one item. */}
                    <input type="number" className="form-control form-control-lg" id="editProductQuantity" {...register("editProductQuantity")} />
                    {/* Display validation feedback for the quantity. */}
                    {errors.editProductQuantity && <span className="text-danger">{errors.editProductQuantity.message}</span>}
                  </div>
                </div>
                {/* Keep the available sizes label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the sizes input. */}
                  <label htmlFor="editProductSize" className="form-label">Available Sizes</label>
                  {/* Require the available shoe sizes and show examples. */}
                  <input type="text" className="form-control form-control-lg" id="editProductSize" placeholder="e.g. 40, 41, 42" {...register("editProductSize")} />
                  {/* Display validation feedback for the available sizes. */}
                  {errors.editProductSize && <span className="text-danger">{errors.editProductSize.message}</span>}
                </div>
                {/* Keep the condition label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the condition menu. */}
                  <label htmlFor="editProductCondition" className="form-label">Condition</label>
                  {/* Require the user to choose the product condition. */}
                  <select className="form-select form-select-lg" id="editProductCondition" {...register("editProductCondition")}>
                    {/* Show an unselectable prompt before a condition is chosen. */}
                    <option value="" disabled>Select condition</option>
                    {/* Allow the New condition. */}
                    <option value="new">New</option>
                    {/* Allow the Like New condition. */}
                    <option value="like-new">Like New</option>
                    {/* Allow the Used condition. */}
                    <option value="used">Used</option>
                  </select>
                  {/* Display validation feedback for the condition. */}
                  {errors.editProductCondition && <span className="text-danger">{errors.editProductCondition.message}</span>}
                </div>
                {/* Keep the description label and text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the description text area. */}
                  <label htmlFor="editProductDescription" className="form-label">Description</label>
                  {/* Require an updated description and show an example prompt. */}
                  <textarea className="form-control form-control-lg" id="editProductDescription" rows="4" placeholder="Enter product description" {...register("editProductDescription")} />
                  {/* Display validation feedback for the description. */}
                  {errors.editProductDescription && <span className="text-danger">{errors.editProductDescription.message}</span>}
                </div>
                {/* Add extra space below the optional image picker. */}
                <div className="mb-4">
                  {/* Connect this label to the product image picker. */}
                  <label htmlFor="editProductImage" className="form-label">Product Images</label>
                  {/* Allow the user to choose multiple image files. */}
                  <input type="file" className="form-control form-control-lg" id="editProductImage" accept="image/*" multiple {...register("editProductImage")} />
                  {/* Display validation feedback for uploaded images. */}
                  {errors.editProductImage && <span className="text-danger">{errors.editProductImage.message}</span>}
                </div>
                {/* Submit the product changes using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the edit product form available to other files.
export default EditProductForm;