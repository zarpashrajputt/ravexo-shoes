// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for customer field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for customer account creation.
const signUpSchema = z.object({
  // Require a full name between 2 and 100 characters.
  signupName: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  // Require a valid email address.
  signupEmail: z.string().min(1, "Email is required").email("Invalid email"),
  // Require a Pakistani mobile number in the requested format.
  signupPhone: z.string().regex(/^03\d{9}$/, "Format: 03XXXXXXXXX"),
  // Require a password with a minimum length, uppercase letter, and number.
  signupPassword: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain an uppercase letter").regex(/[0-9]/, "Password must contain a number"),
  // Require the confirmation field before checking that it matches.
  signupConfirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.signupPassword === data.signupConfirmPassword, {
  // Show the mismatch message on the confirmation field.
  path: ["signupConfirmPassword"],
  // Explain that both password values must match.
  message: "Passwords do not match",
});

// This form displays the customer sign-up fields.
function SignUpForm() {
  // Connect the sign-up schema to the registration form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  // Log valid registration data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  // Return the customer registration form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the sign-up form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify the form as account creation. */}
              <h4 className="text-center mb-4">Create Account</h4>
              {/* Group the registration fields and submit button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the full-name label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the name input. */}
                  <label htmlFor="signupName" className="form-label">Full Name</label>
                  {/* Require the customer's full name. */}
                  <input type="text" className="form-control form-control-lg" id="signupName" {...register("signupName")} />
                  {/* Display validation feedback for the full name. */}
                  {errors.signupName && <span className="text-danger">{errors.signupName.message}</span>}
                </div>
                {/* Keep the email label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the email input. */}
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  {/* Require an email address and use browser email validation. */}
                  <input type="email" className="form-control form-control-lg" id="signupEmail" {...register("signupEmail")} />
                  {/* Display validation feedback for the email. */}
                  {errors.signupEmail && <span className="text-danger">{errors.signupEmail.message}</span>}
                </div>
                {/* Keep the phone label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the phone input. */}
                  <label htmlFor="signupPhone" className="form-label">Phone</label>
                  {/* Require a phone number and show its expected format. */}
                  <input type="tel" className="form-control form-control-lg" id="signupPhone" placeholder="03XXXXXXXXX" {...register("signupPhone")} />
                  {/* Display validation feedback for the phone number. */}
                  {errors.signupPhone && <span className="text-danger">{errors.signupPhone.message}</span>}
                </div>
                {/* Keep the password label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the password input. */}
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  {/* Hide the entered password and require a value. */}
                  <input type="password" className="form-control form-control-lg" id="signupPassword" {...register("signupPassword")} />
                  {/* Display validation feedback for the password. */}
                  {errors.signupPassword && <span className="text-danger">{errors.signupPassword.message}</span>}
                </div>
                {/* Add extra space after the password confirmation field. */}
                <div className="mb-4">
                  {/* Connect this label to the confirmation input. */}
                  <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
                  {/* Ask the customer to enter the password again. */}
                  <input type="password" className="form-control form-control-lg" id="signupConfirmPassword" {...register("signupConfirmPassword")} />
                  {/* Display validation feedback for password confirmation. */}
                  {errors.signupConfirmPassword && <span className="text-danger">{errors.signupConfirmPassword.message}</span>}
                </div>
                {/* Submit the registration form using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the sign-up form available to other files.
export default SignUpForm;