// This form displays customer details and a delivery address.
function CheckoutForm() {
  // Return the checkout form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the checkout form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as the order checkout step. */}
              <h4 className="text-center mb-4">Checkout</h4>
              {/* Group the customer, address, and notes fields. */}
              <form>
                {/* Collect the customer's contact details. */}
                {/* Label the first section of checkout fields. */}
                <h3 className="h5">Customer Details</h3>
                {/* Place the name and email fields side by side on wider screens. */}
                <div className="row">
                  {/* Give the name field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the customer's name input. */}
                    <label htmlFor="checkoutName" className="form-label">Full Name</label>
                    {/* Require the customer's full name. */}
                    <input type="text" className="form-control form-control-lg" id="checkoutName" required />
                  </div>
                  {/* Give the email field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the customer's email input. */}
                    <label htmlFor="checkoutEmail" className="form-label">Email</label>
                    {/* Require an email address and use browser email validation. */}
                    <input type="email" className="form-control form-control-lg" id="checkoutEmail" required />
                  </div>
                </div>
                {/* Keep the phone field on its own row. */}
                <div className="mb-3">
                  {/* Connect this label to the phone input. */}
                  <label htmlFor="checkoutPhone" className="form-label">Phone</label>
                  {/* Require a phone number. */}
                  <input type="tel" className="form-control form-control-lg" id="checkoutPhone" required />
                </div>
                {/* Collect the delivery address. */}
                {/* Label the address section. */}
                <h3 className="h5 mt-3">Address</h3>
                {/* Keep the street address label and text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the street address text area. */}
                  <label htmlFor="checkoutStreet" className="form-label">Address</label>
                  {/* Require the delivery address and show two lines for entry. */}
                  <textarea className="form-control form-control-lg" id="checkoutStreet" rows="2" required />
                </div>
                {/* Place city and postal code side by side on wider screens. */}
                <div className="row">
                  {/* Give the city field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the city input. */}
                    <label htmlFor="checkoutCity" className="form-label">City</label>
                    {/* Require the delivery city. */}
                    <input type="text" className="form-control form-control-lg" id="checkoutCity" required />
                  </div>
                  {/* Give the postal code field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the postal code input. */}
                    <label htmlFor="checkoutPostalCode" className="form-label">Postal Code</label>
                    {/* Require the delivery postal code. */}
                    <input type="text" className="form-control form-control-lg" id="checkoutPostalCode" required />
                  </div>
                </div>
                {/* Add extra space below the optional order notes. */}
                <div className="mb-4">
                  {/* Connect this label to the notes text area. */}
                  <label htmlFor="checkoutNotes" className="form-label">Order Notes (optional)</label>
                  {/* Allow optional delivery instructions or other order notes. */}
                  <textarea className="form-control form-control-lg" id="checkoutNotes" rows="3" />
                </div>
                {/* Submit the checkout form using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the checkout form available to other files.
export default CheckoutForm;