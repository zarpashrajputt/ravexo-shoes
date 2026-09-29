// This form displays the details and images for a new product.
function AddProductForm() {
  return (
    // Center the product form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Add Product</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="productId" className="form-label">Product ID</label>
                  <input type="text" className="form-control form-control-lg" id="productId" placeholder="Enter product ID" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">Product Name</label>
                  <input type="text" className="form-control form-control-lg" id="productName" placeholder="Enter product name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="productSizes" className="form-label">Available Sizes</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productSizes"
                    placeholder="Enter available sizes"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">Product Description</label>
                  <textarea className="form-control form-control-lg" id="productDescription" rows="4" placeholder="Enter product description" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="productImages" className="form-label">Product Images</label>
                  <input type="file" className="form-control form-control-lg" id="productImages" accept="image/*" multiple disabled />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductForm;