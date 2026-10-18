// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for payment field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for payment method and card details.
const paymentSchema = z.object({
  // Limit the payment method to the options shown in the form.
  paymentMethod: z.enum(["cash", "credit-debit-card", "easypaisa", "jazzcash"], { message: "Please select a payment method" }),
  // Require exactly 16 digits for the card number.
  paymentCardNumber: z.string().regex(/^\d{16}$/, "Card number must contain exactly 16 digits"),
  // Require a valid month and two-digit year in MM/YY format.
  paymentExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must use MM/YY format"),
  // Require exactly three digits for the security code.
  paymentCvv: z.string().regex(/^\d{3}$/, "CVV must contain exactly 3 digits"),
});

// This form displays the available payment methods.
function PaymentForm() {
  // Connect the payment schema and empty method value to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: { paymentMethod: "" },
  });
  // Log valid payment data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

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
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the payment method label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the payment method menu. */}
                  <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                  {/* Require a payment method and show a prompt initially. */}
                  <select className="form-select form-select-lg" id="paymentMethod" {...register("paymentMethod")}>
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
                  {/* Display validation feedback for the payment method. */}
                  {errors.paymentMethod && <span className="text-danger">{errors.paymentMethod.message}</span>}
                </div>
                {/* Keep the card number label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the card number input. */}
                  <label htmlFor="paymentCardNumber" className="form-label">Card Number</label>
                  {/* Require the card number. */}
                  <input type="text" className="form-control form-control-lg" id="paymentCardNumber" {...register("paymentCardNumber")} />
                  {/* Display validation feedback for the card number. */}
                  {errors.paymentCardNumber && <span className="text-danger">{errors.paymentCardNumber.message}</span>}
                </div>
                {/* Place expiry date and security code side by side. */}
                <div className="row">
                  {/* Give the expiry date field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the expiry date input. */}
                    <label htmlFor="paymentExpiry" className="form-label">Expiry Date</label>
                    {/* Require the card expiry date and show the expected format. */}
                    <input type="text" className="form-control form-control-lg" id="paymentExpiry" placeholder="MM/YY" {...register("paymentExpiry")} />
                    {/* Display validation feedback for the expiry date. */}
                    {errors.paymentExpiry && <span className="text-danger">{errors.paymentExpiry.message}</span>}
                  </div>
                  {/* Give the CVV field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the CVV input. */}
                    <label htmlFor="paymentCvv" className="form-label">CVV</label>
                    {/* Mask the security code, require it, and limit it to three characters. */}
                    <input type="password" className="form-control form-control-lg" id="paymentCvv" {...register("paymentCvv")} />
                    {/* Display validation feedback for the CVV. */}
                    {errors.paymentCvv && <span className="text-danger">{errors.paymentCvv.message}</span>}
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