// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for product field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

import { addProductAxiosFunction } from "../api.jsx";

// Define validation rules for new product details.
const addProductSchema = z.object({
  // Require a product ID between 1 and 6 characters.
  productId: z.string().min(1, "Product ID is required").max(6, "Product ID must be at most 6 characters"),
  // Require a product name between 2 and 10 characters.
  productName: z.string().min(1, "Product Name is required").min(2, "Product Name must be at least 2 characters").max(10, "Product Name must be at most 10 characters"),
  // Require a brand name between 1 and 60 characters.
  productBrand: z.string().min(1, "Brand is required").max(60, "Brand must be at most 60 characters"),
  // Require a positive product price.
  productPrice: z.number().positive("Price must be greater than zero"),
  // Require a positive whole-number quantity.
  productQuantity: z.number().int("Quantity must be a whole number").min(1, "Quantity must be at least 1"),
  // Require at least one available size.
  productSizes: z.string().min(1, "Available sizes are required").max(50, "Available sizes must be at most 50 characters"),
  // Limit the condition to the choices shown in the form.
  productCondition: z.enum(["new", "like-new", "used"], { message: "Please select a product condition" }),
  // Require a product description between 10 and 20 characters.
  productDescription: z.string().min(1, "Description is required").min(10, "Description must be at least 10 characters").max(20, "Description must be at most 20 characters"),
  // Require at least one product image.
  productImages: z.any().refine(
    (files) => files && files.length > 0,
    "At least one image is required"
  ),
});

// Define and export the form used to enter a new product's information.
function AddProductForm() {
  // Connect the product schema and empty condition to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(addProductSchema),
  });
 
  async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await addProductAxiosFunction(data);

  }

  return (
    // Add vertical spacing and horizontal page padding with Bootstrap.
    <div className="container py-5">
      {/* Center the form row within the page container. */}                                                     
      <div className="row justify-content-center">
        {/* Set the form width responsively for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Place the form inside a card with a subtle shadow and rounded corners. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add responsive padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name above the form. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as the product creation form. */}
              <h4 className="text-center mb-4">Add Product</h4>
              {/* Group all product fields and provide browser form submission behavior. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the product ID label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the product ID input. */}
                  <label htmlFor="productId" className="form-label">Product ID</label>
                  {/* Collect a required product ID and show a hint when the field is empty. */}
                  <input type="text" className="form-control form-control-lg" id="productId" placeholder="Enter product ID" {...register("productId")} />
                  {/* Display validation feedback for the product ID. */}
                  {errors.productId && <span className="text-danger">{errors.productId.message}</span>}
                </div>
                {/* Keep the product name label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the product name input. */}
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  {/* Collect the required name that will identify the product. */}
                  <input type="text" className="form-control form-control-lg" id="productName" placeholder="Enter product name" {...register("productName")} />
                  {/* Display validation feedback for the product name. */}
                  {errors.productName && <span className="text-danger">{errors.productName.message}</span>}
                </div>
                {/* Keep the brand label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the brand input. */}
                  <label htmlFor="productBrand" className="form-label">Brand</label>
                  {/* Collect the required brand and give examples as a placeholder. */}
                  <input type="text" className="form-control form-control-lg" id="productBrand" placeholder="e.g. Nike, Adidas" {...register("productBrand")} />
                  {/* Display validation feedback for the brand. */}
                  {errors.productBrand && <span className="text-danger">{errors.productBrand.message}</span>}
                </div>
                {/* Place price and quantity side by side in a Bootstrap row. */}
                <div className="row">
                  {/* Give the price field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Associate this label with the product price input. */}
                    <label htmlFor="productPrice" className="form-label">Price in PKR</label>
                    {/* Collect a required non-negative price in rupees, allowing decimal values. */}
                    <input type="number" className="form-control form-control-lg" id="productPrice" step="0.01" {...register("productPrice", { valueAsNumber: true })} />
                    {/* Display validation feedback for the price. */}
                    {errors.productPrice && <span className="text-danger">{errors.productPrice.message}</span>}
                  </div>
                  {/* Give the quantity field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Associate this label with the product quantity input. */}
                    <label htmlFor="productQuantity" className="form-label">Quantity</label>
                    {/* Collect a required quantity of at least one item. */}
                    <input type="number" className="form-control form-control-lg" id="productQuantity" {...register("productQuantity", { valueAsNumber: true })} />
                    {/* Display validation feedback for the quantity. */}
                    {errors.productQuantity && <span className="text-danger">{errors.productQuantity.message}</span>}
                  </div>
                </div>
                {/* Keep the available sizes field together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the sizes input. */}
                  <label htmlFor="productSizes" className="form-label">Available Sizes</label>
                  {/* Start the sizes input and apply Bootstrap's large input styling. */}
                  <input
                    /* Use a text input so multiple shoe sizes can be entered. */
                    type="text"
                    /* Apply Bootstrap's large input styling. */
                    className="form-control form-control-lg"
                    /* Give the input a unique identifier for its label. */
                    id="productSizes"
                    /* Show example shoe sizes before the user enters a value. */
                    placeholder="e.g. 40, 41, 42"
                    /* Register the sizes field for schema validation. */
                    {...register("productSizes")}
                    /* Close the sizes input element. */
                  />
                  {/* Display validation feedback for available sizes. */}
                  {errors.productSizes && <span className="text-danger">{errors.productSizes.message}</span>}
                </div>
                {/* Keep the condition label and selection menu together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the condition menu. */}
                  <label htmlFor="productCondition" className="form-label">Condition</label>
                  {/* Require the user to choose one product condition. */}
                  <select className="form-select form-select-lg" id="productCondition" {...register("productCondition")}>
                    {/* Show an unselectable prompt until a condition is chosen. */}
                    <option value="" disabled>Select condition</option>
                    {/* Provide the New condition choice. */}
                    <option value="new">New</option>
                    {/* Provide the Like New condition choice. */}
                    <option value="like-new">Like New</option>
                    {/* Provide the Used condition choice. */}
                    <option value="used">Used</option>
                    {/* Close the condition selection menu. */}
                  </select>
                  {/* Display validation feedback for the condition. */}
                  {errors.productCondition && <span className="text-danger">{errors.productCondition.message}</span>}
                </div>
                {/* Keep the description label and text area together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the description text area. */}
                  <label htmlFor="productDescription" className="form-label">Description</label>
                  {/* Collect a required product description in a four-row text area. */}
                  <textarea className="form-control form-control-lg" id="productDescription" rows="4" placeholder="Enter product description" {...register("productDescription")} />
                  {/* Display validation feedback for the description. */}
                  {errors.productDescription && <span className="text-danger">{errors.productDescription.message}</span>}
                </div>
                {/* Add extra space below the optional image upload field. */}
                <div className="mb-4">
                  {/* Associate this label with the product image picker. */}
                  <label htmlFor="productImages" className="form-label">Product Images</label>
                  {/* Let the user select multiple image files; image files are accepted. */}
                  <input type="file" className="form-control form-control-lg" id="productImages" accept="image/*" multiple {...register("productImages")} />
                  {/* Display validation feedback for uploaded images. */}
                  {errors.productImages && <span className="text-danger">{errors.productImages.message}</span>}
                </div>
                {/* Submit the form using the Ravexo brand colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Add Product</button>
                {/* Close the product form. */}
              </form>
              {/* Close the padded card body. */}
            </div>
            {/* Close the Bootstrap card. */}
          </div>
          {/* Close the responsive width column. */}
        </div>
        {/* Close the centered row. */}
      </div>
      {/* Close the page container. */}
    </div>
  );
}

// Make this component available for import in other files.
export default AddProductForm;