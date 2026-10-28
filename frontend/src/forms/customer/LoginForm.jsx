// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for customer login validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAxiosFunction } from "../api.jsx";

// Define validation rules for customer login credentials.
const loginSchema = z.object({
  // Require a valid customer email address.
  loginEmail: z.string().min(1, "Email is required"),
  // Require a password with a minimum length, uppercase letter, and number.
  loginPassword: z.string().min(8, "Password must be at least 8 characters"),
});

// This form displays the customer login fields.
function LoginForm() {
  // Connect the login schema to the customer form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  
  async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await loginAxiosFunction(data);

  }

  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the login form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify the form as customer login. */}
              <h4 className="text-center mb-4"> Login</h4>
              {/* Group the login fields and submit button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the email label and input together. */}
                <div className="mb-3">
                  {/* Connect the email label to its input. */}
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  {/* Require an email address and use browser email validation. */}
                  <input type="email" className="form-control form-control-lg" id="loginEmail" {...register("loginEmail")} />
                  {/* Display validation feedback for the email. */}
                  {errors.loginEmail && <span className="text-danger">{errors.loginEmail.message}</span>}
                </div>
                {/* Keep the password label and input together. */}
                <div className="mb-3">
                  {/* Connect the password label to its input. */}
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  {/* Hide the entered password and require a value. */}
                  <input type="password" className="form-control form-control-lg" id="loginPassword" {...register("loginPassword")} />
                  {/* Display validation feedback for the password. */}
                  {errors.loginPassword && <span className="text-danger">{errors.loginPassword.message}</span>}
                </div>
                {/* Align the password-help link to the right. */}
                <div className="text-end mb-3">
                  {/* Display a link for the password recovery flow. */}
                  <a href="#" className="link-success text-decoration-none">Forgot Password?</a>
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

// Make the customer login form available to other files.
export default LoginForm;