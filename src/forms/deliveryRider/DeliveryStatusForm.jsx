function DeliveryStatusForm() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Update Delivery Status</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="deliveryOrderId" className="form-label">Order ID</label>
                  <input type="text" className="form-control form-control-lg" id="deliveryOrderId" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="deliveryStatus" className="form-label">Delivery Status</label>
                  <select className="form-select form-select-lg" id="deliveryStatus" defaultValue="" required>
                    <option value="" disabled>Select a status</option>
                    <option value="picked-up">Picked Up</option>
                    <option value="in-transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                    <option value="failed">Delivery Failed</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="deliveryNotes" className="form-label">Delivery Notes</label>
                  <textarea className="form-control form-control-lg" id="deliveryNotes" rows="3" />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update Status</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryStatusForm;