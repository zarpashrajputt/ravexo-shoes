// This form displays customer details and a delivery address.
function CheckoutForm() {
  return (
    // Center the checkout form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Checkout Details</h2>
              <form>
                {/* Collect the customer's contact details. */}
                <h3 className="h5">Customer Details</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkoutName" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-lg" id="checkoutName" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkoutEmail" className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" id="checkoutEmail" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="checkoutPhone" className="form-label">Phone</label>
                  <input type="tel" className="form-control form-control-lg" id="checkoutPhone" required />
                </div>
                {/* Collect the delivery address. */}
                <h3 className="h5 mt-3">Address</h3>
                <div className="mb-3">
                  <label htmlFor="checkoutStreet" className="form-label">Street</label>
                  <input type="text" className="form-control form-control-lg" id="checkoutStreet" required />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkoutCity" className="form-label">City</label>
                    <input type="text" className="form-control form-control-lg" id="checkoutCity" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="checkoutPostalCode" className="form-label">Postal Code</label>
                    <input type="text" className="form-control form-control-lg" id="checkoutPostalCode" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Continue to Checkout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;