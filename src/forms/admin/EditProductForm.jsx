// This form displays fields for editing a shoe product.
function EditProductForm() {
  return (
    // Center the edit product form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Edit Product</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editProductName" className="form-label">Shoe Name</label>
                    <input type="text" className="form-control form-control-lg" id="editProductName" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editProductPrice" className="form-label">Price</label>
                    <input type="number" className="form-control form-control-lg" id="editProductPrice" min="0" step="0.01" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editProductSize" className="form-label">Size</label>
                    <input type="number" className="form-control form-control-lg" id="editProductSize" min="1" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="editProductCondition" className="form-label">Condition</label>
                    <select className="form-select form-select-lg" id="editProductCondition" defaultValue="" required>
                      <option value="" disabled>Select condition</option>
                      <option value="new">New</option>
                      <option value="used">Used</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="editProductImage" className="form-label">Image</label>
                  <input type="file" className="form-control form-control-lg" id="editProductImage" accept="image/*" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProductForm;