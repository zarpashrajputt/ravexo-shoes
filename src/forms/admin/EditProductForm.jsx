// This form displays fields for editing a shoe product.
function EditProductForm() {
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
              <form>
                {/* Keep the product ID label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the product ID input. */}
                  <label htmlFor="editProductId" className="form-label">Product ID</label>
                  {/* Display the product ID without allowing it to be changed. */}
                  <input type="text" className="form-control form-control-lg" id="editProductId" readOnly />
                </div>
                {/* Keep the product name label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the product name input. */}
                  <label htmlFor="editProductName" className="form-label">Product Name</label>
                  {/* Require an updated product name. */}
                  <input type="text" className="form-control form-control-lg" id="editProductName" required />
                </div>
                {/* Keep the brand label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the brand input. */}
                  <label htmlFor="editProductBrand" className="form-label">Brand</label>
                  {/* Require a brand name and provide examples. */}
                  <input type="text" className="form-control form-control-lg" id="editProductBrand" placeholder="e.g. Nike, Adidas" required />
                </div>
                {/* Place price and quantity side by side on wider screens. */}
                <div className="row">
                  {/* Give the price field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the product price input. */}
                    <label htmlFor="editProductPrice" className="form-label">Price in PKR</label>
                    {/* Require a non-negative price in rupees and allow decimal values. */}
                    <input type="number" className="form-control form-control-lg" id="editProductPrice" min="0" step="0.01" required />
                  </div>
                  {/* Give the quantity field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the product quantity input. */}
                    <label htmlFor="editProductQuantity" className="form-label">Quantity</label>
                    {/* Require a quantity of at least one item. */}
                    <input type="number" className="form-control form-control-lg" id="editProductQuantity" min="1" required />
                  </div>
                </div>
                {/* Keep the available sizes label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the sizes input. */}
                  <label htmlFor="editProductSize" className="form-label">Available Sizes</label>
                  {/* Require the available shoe sizes and show examples. */}
                  <input type="text" className="form-control form-control-lg" id="editProductSize" placeholder="e.g. 40, 41, 42" required />
                </div>
                {/* Keep the condition label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the condition menu. */}
                  <label htmlFor="editProductCondition" className="form-label">Condition</label>
                  {/* Require the user to choose the product condition. */}
                  <select className="form-select form-select-lg" id="editProductCondition" defaultValue="" required>
                    {/* Show an unselectable prompt before a condition is chosen. */}
                    <option value="" disabled>Select condition</option>
                    {/* Allow the New condition. */}
                    <option value="new">New</option>
                    {/* Allow the Like New condition. */}
                    <option value="like-new">Like New</option>
                    {/* Allow the Used condition. */}
                    <option value="used">Used</option>
                  </select>
                </div>
                {/* Keep the description label and text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the description text area. */}
                  <label htmlFor="editProductDescription" className="form-label">Description</label>
                  {/* Require an updated description and show an example prompt. */}
                  <textarea className="form-control form-control-lg" id="editProductDescription" rows="4" placeholder="Enter product description" required />
                </div>
                {/* Add extra space below the optional image picker. */}
                <div className="mb-4">
                  {/* Connect this label to the product image picker. */}
                  <label htmlFor="editProductImage" className="form-label">Product Images</label>
                  {/* Allow the user to choose multiple image files. */}
                  <input type="file" className="form-control form-control-lg" id="editProductImage" accept="image/*" multiple />
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