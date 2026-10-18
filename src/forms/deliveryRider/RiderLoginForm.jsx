// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for rider login validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for rider login credentials.
const riderLoginSchema = z.object({
  // Require a valid rider email address.
  riderEmail: z.string().min(1, "Email is required").email("Invalid email"),
  // Require a password with a minimum length, uppercase letter, and number.
  riderPassword: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain an uppercase letter").regex(/[0-9]/, "Password must contain a number"),
});

// Define the login form used by delivery riders.
function RiderLoginForm() {
  // Connect the rider schema to the login form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(riderLoginSchema),
  });
  // Log valid rider login data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  // Return the rider login form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the rider login form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as rider login. */}
              <h4 className="text-center mb-4">Rider Login</h4>
              {/* Group the rider credentials and submit button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the rider email label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the rider email input. */}
                  <label htmlFor="riderEmail" className="form-label">Rider Email</label>
                  {/* Require an email and identify it as the username for autofill. */}
                  <input type="email" className="form-control form-control-lg" id="riderEmail" autoComplete="username" {...register("riderEmail")} />
                  {/* Display validation feedback for the rider email. */}
                  {errors.riderEmail && <span className="text-danger">{errors.riderEmail.message}</span>}
                </div>
                {/* Add extra space below the password field. */}
                <div className="mb-4">
                  {/* Connect this label to the rider password input. */}
                  <label htmlFor="riderPassword" className="form-label">Password</label>
                  {/* Hide the password and support browser password autofill. */}
                  <input type="password" className="form-control form-control-lg" id="riderPassword" autoComplete="current-password" {...register("riderPassword")} />
                  {/* Display validation feedback for the password. */}
                  {errors.riderPassword && <span className="text-danger">{errors.riderPassword.message}</span>}
                </div>
                {/* Submit the login form using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the rider login form available to other files.
export default RiderLoginForm;