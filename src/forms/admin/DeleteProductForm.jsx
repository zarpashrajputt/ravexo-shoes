// This form displays product deletion and confirmation controls.
function DeleteProductForm() {
  return (
    // Center the delete form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Delete Product</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="deleteProduct" className="form-label">Product</label>
                  <select className="form-select form-select-lg" id="deleteProduct" defaultValue="" required>
                    <option value="" disabled>Select a product</option>
                    <option value="sport-sneaker">Sport Sneaker</option>
                    <option value="mid-top">Mid-Top Sneaker</option>
                    <option value="high-top">High-Top Sneaker</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="deleteConfirm" required />
                  <label htmlFor="deleteConfirm" className="form-check-label">I confirm this product should be deleted</label>
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Delete</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProductForm;