// This form displays order details and a status selector.
function OrderManagementForm() {
  return (
    // Center the order management form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Manage Order</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="managementOrderId" className="form-label">Order ID</label>
                  <input type="text" className="form-control form-control-lg" id="managementOrderId" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="managementCustomerName" className="form-label">Customer Name</label>
                  <input type="text" className="form-control form-control-lg" id="managementCustomerName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="managementStatus" className="form-label">Order Status</label>
                  <select className="form-select form-select-lg" id="managementStatus" defaultValue="" required>
                    <option value="" disabled>Select a status</option>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementForm;