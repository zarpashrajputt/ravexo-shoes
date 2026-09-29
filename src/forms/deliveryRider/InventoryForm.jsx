// This form displays the inventory fields for a shoe product.
function InventoryForm() {
  return (
    // Center the inventory form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Update Inventory</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="inventoryProduct" className="form-label">Product</label>
                  <select className="form-select form-select-lg" id="inventoryProduct" defaultValue="" required>
                    <option value="" disabled>Select a product</option>
        
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="inventorySize" className="form-label">Size</label>
                  <input type="number" className="form-control form-control-lg" id="inventorySize" min="1" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="inventoryQuantity" className="form-label">Stock Quantity</label>
                  <input type="number" className="form-control form-control-lg" id="inventoryQuantity" min="0" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Save Inventory</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryForm;