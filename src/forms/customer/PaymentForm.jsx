// This form displays the available payment methods.
function PaymentForm() {
  return (
    // Center the payment form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Payment Method</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="paymentMethod" className="form-label">Select a payment method</label>
                  <select className="form-select form-select-lg" id="paymentMethod" defaultValue="" required>
                    <option value="" disabled>Choose a method</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="easypaisa">Easypaisa</option>
                    <option value="jazzcash">JazzCash</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;