// Define and export the form used to enter a new product's information.
function AddProductForm() {
  // Return the form's JSX so React can display it.
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
              <form>
                {/* Keep the product ID label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the product ID input. */}
                  <label htmlFor="productId" className="form-label">Product ID</label>
                  {/* Collect a required product ID and show a hint when the field is empty. */}
                  <input type="text" className="form-control form-control-lg" id="productId" placeholder="Enter product ID" required />
                </div>
                {/* Keep the product name label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the product name input. */}
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  {/* Collect the required name that will identify the product. */}
                  <input type="text" className="form-control form-control-lg" id="productName" placeholder="Enter product name" required />
                </div>
                {/* Keep the brand label and input together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the brand input. */}
                  <label htmlFor="productBrand" className="form-label">Brand</label>
                  {/* Collect the required brand and give examples as a placeholder. */}
                  <input type="text" className="form-control form-control-lg" id="productBrand" placeholder="e.g. Nike, Adidas" required />
                </div>
                {/* Place price and quantity side by side in a Bootstrap row. */}
                <div className="row">
                  {/* Give the price field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Associate this label with the product price input. */}
                    <label htmlFor="productPrice" className="form-label">Price in PKR</label>
                    {/* Collect a required non-negative price in rupees, allowing decimal values. */}
                    <input type="number" className="form-control form-control-lg" id="productPrice" min="0" step="0.01" required />
                  </div>
                  {/* Give the quantity field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Associate this label with the product quantity input. */}
                    <label htmlFor="productQuantity" className="form-label">Quantity</label>
                    {/* Collect a required quantity of at least one item. */}
                    <input type="number" className="form-control form-control-lg" id="productQuantity" min="1" required />
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
                    /* Require the user to enter available sizes. */
                    required
                    /* Close the sizes input element. */
                  />
                </div>
                {/* Keep the condition label and selection menu together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the condition menu. */}
                  <label htmlFor="productCondition" className="form-label">Condition</label>
                  {/* Require the user to choose one product condition. */}
                  <select className="form-select form-select-lg" id="productCondition" defaultValue="" required>
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
                </div>
                {/* Keep the description label and text area together with bottom spacing. */}
                <div className="mb-3">
                  {/* Associate this label with the description text area. */}
                  <label htmlFor="productDescription" className="form-label">Description</label>
                  {/* Collect a required product description in a four-row text area. */}
                  <textarea className="form-control form-control-lg" id="productDescription" rows="4" placeholder="Enter product description" required />
                </div>
                {/* Add extra space below the optional image upload field. */}
                <div className="mb-4">
                  {/* Associate this label with the product image picker. */}
                  <label htmlFor="productImages" className="form-label">Product Images</label>
                  {/* Let the user select multiple image files; image files are accepted. */}
                  <input type="file" className="form-control form-control-lg" id="productImages" accept="image/*" multiple />
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