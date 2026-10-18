// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for checkout field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for customer and delivery details.
const checkoutSchema = z.object({
  // Require a customer name between 2 and 100 characters.
  checkoutName: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  // Require a valid email address.
  checkoutEmail: z.string().min(1, "Email is required").email("Invalid email"),
  // Require a Pakistani mobile number in the requested format.
  checkoutPhone: z.string().regex(/^03\d{9}$/, "Format: 03XXXXXXXXX"),
  // Require a usable delivery address.
  checkoutStreet: z.string().min(1, "Address is required").min(5, "Address must be at least 5 characters").max(300, "Address must be at most 300 characters"),
  // Require a city name between 2 and 80 characters.
  checkoutCity: z.string().min(1, "City is required").min(2, "City must be at least 2 characters").max(80, "City must be at most 80 characters"),
  // Require a 4 to 10 digit postal code.
  checkoutPostalCode: z.string().regex(/^\d{4,10}$/, "Postal code must contain 4 to 10 digits"),
  // Allow optional notes up to 500 characters.
  checkoutNotes: z.string().max(500, "Notes must be at most 500 characters"),
});

// This form displays customer details and a delivery address.
function CheckoutForm() {
  // Connect the checkout schema to the delivery form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { checkoutNotes: "" },
  });
  // Log valid checkout data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

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
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
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
                    <input type="text" className="form-control form-control-lg" id="checkoutName" {...register("checkoutName")} />
                    {/* Display validation feedback for the name. */}
                    {errors.checkoutName && <span className="text-danger">{errors.checkoutName.message}</span>}
                  </div>
                  {/* Give the email field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the customer's email input. */}
                    <label htmlFor="checkoutEmail" className="form-label">Email</label>
                    {/* Require an email address and use browser email validation. */}
                    <input type="email" className="form-control form-control-lg" id="checkoutEmail" {...register("checkoutEmail")} />
                    {/* Display validation feedback for the email. */}
                    {errors.checkoutEmail && <span className="text-danger">{errors.checkoutEmail.message}</span>}
                  </div>
                </div>
                {/* Keep the phone field on its own row. */}
                <div className="mb-3">
                  {/* Connect this label to the phone input. */}
                  <label htmlFor="checkoutPhone" className="form-label">Phone</label>
                  {/* Require a phone number. */}
                  <input type="tel" className="form-control form-control-lg" id="checkoutPhone" placeholder="03XXXXXXXXX" {...register("checkoutPhone")} />
                  {/* Display validation feedback for the phone number. */}
                  {errors.checkoutPhone && <span className="text-danger">{errors.checkoutPhone.message}</span>}
                </div>
                {/* Collect the delivery address. */}
                {/* Label the address section. */}
                <h3 className="h5 mt-3">Address</h3>
                {/* Keep the street address label and text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the street address text area. */}
                  <label htmlFor="checkoutStreet" className="form-label">Address</label>
                  {/* Require the delivery address and show two lines for entry. */}
                  <textarea className="form-control form-control-lg" id="checkoutStreet" rows="2" {...register("checkoutStreet")} />
                  {/* Display validation feedback for the address. */}
                  {errors.checkoutStreet && <span className="text-danger">{errors.checkoutStreet.message}</span>}
                </div>
                {/* Place city and postal code side by side on wider screens. */}
                <div className="row">
                  {/* Give the city field half the row width on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the city input. */}
                    <label htmlFor="checkoutCity" className="form-label">City</label>
                    {/* Require the delivery city. */}
                    <input type="text" className="form-control form-control-lg" id="checkoutCity" {...register("checkoutCity")} />
                    {/* Display validation feedback for the city. */}
                    {errors.checkoutCity && <span className="text-danger">{errors.checkoutCity.message}</span>}
                  </div>
                  {/* Give the postal code field the other half of the row on medium screens and larger. */}
                  <div className="col-md-6 mb-3">
                    {/* Connect this label to the postal code input. */}
                    <label htmlFor="checkoutPostalCode" className="form-label">Postal Code</label>
                    {/* Require the delivery postal code. */}
                    <input type="text" className="form-control form-control-lg" id="checkoutPostalCode" {...register("checkoutPostalCode")} />
                    {/* Display validation feedback for the postal code. */}
                    {errors.checkoutPostalCode && <span className="text-danger">{errors.checkoutPostalCode.message}</span>}
                  </div>
                </div>
                {/* Add extra space below the optional order notes. */}
                <div className="mb-4">
                  {/* Connect this label to the notes text area. */}
                  <label htmlFor="checkoutNotes" className="form-label">Order Notes (optional)</label>
                  {/* Allow optional delivery instructions or other order notes. */}
                  <textarea className="form-control form-control-lg" id="checkoutNotes" rows="3" {...register("checkoutNotes")} />
                  {/* Display validation feedback for optional notes. */}
                  {errors.checkoutNotes && <span className="text-danger">{errors.checkoutNotes.message}</span>}
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