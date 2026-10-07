// This form displays order details and a status selector.
function OrderManagementForm() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              <h4 className="text-center mb-4">Manage Order</h4>
              <form>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Assign Rider</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="form-control" id="managementOrderId" aria-label="Order ID" readOnly /></td>
                        <td><input type="text" className="form-control" id="managementCustomerName" aria-label="Customer Name" readOnly /></td>
                        <td><input type="text" className="form-control" id="managementProductName" aria-label="Product Name" readOnly /></td>
                        <td>
                          <select className="form-select" id="managementStatus" aria-label="Order Status" defaultValue="" required>
                            <option value="" disabled>Select a status</option>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-select" id="managementRider" aria-label="Assign Rider" defaultValue="" required>
                            <option value="" disabled>Select rider</option>
                            <option value="rider-1">Rider 1</option>
                            <option value="rider-2">Rider 2</option>
                            <option value="rider-3">Rider 3</option>
                          </select>
                        </td>
                        <td>
                          <button type="submit" className="btn text-nowrap" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>
                            Update Order
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementForm;