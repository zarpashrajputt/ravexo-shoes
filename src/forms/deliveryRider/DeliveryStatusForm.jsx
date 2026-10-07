// Define the form delivery riders use to update an order's delivery status.
function DeliveryStatusForm() {
  // Return the delivery status form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the delivery form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as a delivery status update. */}
              <h4 className="text-center mb-4">Update Delivery Status</h4>
              {/* Group the order details, status, and remarks. */}
              <form>
                {/* Keep the order ID label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the order ID input. */}
                  <label htmlFor="deliveryOrderId" className="form-label">Order ID</label>
                  {/* Display the order ID without allowing changes. */}
                  <input type="text" className="form-control form-control-lg" id="deliveryOrderId" readOnly />
                </div>
                {/* Keep the customer name label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the customer name input. */}
                  <label htmlFor="deliveryCustomerName" className="form-label">Customer Name</label>
                  {/* Display the customer name without allowing changes. */}
                  <input type="text" className="form-control form-control-lg" id="deliveryCustomerName" readOnly />
                </div>
                {/* Keep the delivery address label and read-only text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the delivery address text area. */}
                  <label htmlFor="deliveryAddress" className="form-label">Delivery Address</label>
                  {/* Display the delivery address in two read-only lines. */}
                  <textarea className="form-control form-control-lg" id="deliveryAddress" rows="2" readOnly />
                </div>
                {/* Keep the delivery status label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the delivery status menu. */}
                  <label htmlFor="deliveryStatus" className="form-label">Status</label>
                  {/* Require the rider to choose the current delivery status. */}
                  <select className="form-select form-select-lg" id="deliveryStatus" defaultValue="" required>
                    {/* Show an unselectable prompt before a status is chosen. */}
                    <option value="" disabled>Select a status</option>
                    {/* Allow the rider to mark the order as picked up. */}
                    <option value="picked-up">Picked Up</option>
                    {/* Allow the rider to mark the order as out for delivery. */}
                    <option value="out-for-delivery">Out for Delivery</option>
                    {/* Allow the rider to mark the order as delivered. */}
                    <option value="delivered">Delivered</option>
                    {/* Allow the rider to mark the delivery as failed. */}
                    <option value="failed">Failed</option>
                  </select>
                </div>
                {/* Add extra space below the optional delivery remarks. */}
                <div className="mb-4">
                  {/* Connect this label to the remarks text area. */}
                  <label htmlFor="deliveryNotes" className="form-label">Remarks (optional)</label>
                  {/* Allow the rider to add optional notes in a three-row text area. */}
                  <textarea className="form-control form-control-lg" id="deliveryNotes" rows="3" />
                </div>
                {/* Submit the status update using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update Status</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the delivery status form available to other files.
export default DeliveryStatusForm;