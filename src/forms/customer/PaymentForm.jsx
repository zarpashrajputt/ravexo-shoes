// This form displays the available payment methods.
function PaymentForm() {
  // Return the payment form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the payment form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify the form as payment details. */}
              <h4 className="text-center mb-4">Payment</h4>
              {/* Group the payment fields and submit button. */}
              <form>
                {/* Keep the payment method label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the payment method menu. */}
                  <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                  {/* Require a payment method and show a prompt initially. */}
                  <select className="form-select form-select-lg" id="paymentMethod" defaultValue="" required>
                    {/* Provide an unselectable prompt before a method is chosen. */}
                    <option value="" disabled>Choose a method</option>
                    {/* Offer cash payment when the order is delivered. */}
                    <option value="cash">Cash on Delivery</option>
                    {/* Offer payment by credit or debit card. */}
                    <option value="credit-debit-card">Credit/Debit Card</option>
                    {/* Offer Easypaisa as a payment option. */}
                    <option value="easypaisa">Easypaisa</option>
                    {/* Offer JazzCash as a payment option. */}
                    <option value="jazzcash">JazzCash</option>
                  </select>
                </div>
                {/* Keep the card number label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the card number input. */}
                  <label htmlFor="paymentCardNumber" className="form-label">Card Number</label>
                  {/* Require the card number. */}
                  <input type="text" className="form-control form-control-lg" id="paymentCardNumber" required />
                </div>
                {/* Place expiry date and security code side by side. */}
                <div className="row">
                  {/* Give the expiry date field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the expiry date input. */}
                    <label htmlFor="paymentExpiry" className="form-label">Expiry Date</label>
                    {/* Require the card expiry date and show the expected format. */}
                    <input type="text" className="form-control form-control-lg" id="paymentExpiry" placeholder="MM/YY" required />
                  </div>
                  {/* Give the CVV field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the CVV input. */}
                    <label htmlFor="paymentCvv" className="form-label">CVV</label>
                    {/* Mask the security code, require it, and limit it to three characters. */}
                    <input type="password" className="form-control form-control-lg" id="paymentCvv" maxLength="3" required />
                  </div>
                </div>
                {/* Submit the payment form using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Pay Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the payment form available to other files.
export default PaymentForm;