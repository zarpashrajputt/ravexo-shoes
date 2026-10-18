// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for login field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for the admin credentials.
const adminLoginSchema = z.object({
  // Require a valid admin email address.
  adminEmail: z.string().min(1, "Email is required").email("Invalid email"),
  // Require a password with a minimum length, uppercase letter, and number.
  adminPassword: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain an uppercase letter").regex(/[0-9]/, "Password must contain a number"),
});

// This component shows the admin login form.
function AdminLoginForm() {
  // Connect the admin schema to the login form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(adminLoginSchema),
  });
  // Log valid login data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  // Return the form's JSX layout.
  return (
    // Add vertical spacing and center the page content.
    <div className="container py-5">
      {/* Create a Bootstrap row and center its columns. */}
      <div className="row justify-content-center">
        {/* Set the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Show the form inside a Bootstrap card. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add space inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Show the website name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Show the form title. */}
              <h4 className="text-center mb-4">Admin Login</h4>
              {/* Group the admin login fields and button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the email field in its own spacing block. */}
                <div className="mb-3">
                  {/* Connect the Email label to its input. */}
                  <label htmlFor="adminEmail" className="form-label">Email</label>
                  {/* Accept an email address and require a value. */}
                  <input type="email" className="form-control form-control-lg" id="adminEmail" {...register("adminEmail")} />
                  {/* Display validation feedback for the email. */}
                  {errors.adminEmail && <span className="text-danger">{errors.adminEmail.message}</span>}
                </div>{/* Close the email field block. */}
                {/* Keep the password field in its own spacing block. */}
                <div className="mb-3">
                  {/* Connect the Password label to its input. */}
                  <label htmlFor="adminPassword" className="form-label">Password</label>
                  {/* Hide the password while it is being entered. */}
                  <input type="password" className="form-control form-control-lg" id="adminPassword" {...register("adminPassword")} />
                  {/* Display validation feedback for the password. */}
                  {errors.adminPassword && <span className="text-danger">{errors.adminPassword.message}</span>}
                </div>{/* Close the password field block. */}
                {/* Submit the login form with the existing Ravexo button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Login</button>
              </form>{/* Close the login form. */}
            </div>{/* Close the card body. */}
          </div>{/* Close the card. */}
        </div>{/* Close the responsive column. */}
      </div>{/* Close the centered row. */}
      {/* Close the page container. */}
    </div>
  ); // Finish returning the JSX.
}

// Make this form available to other files.
export default AdminLoginForm;