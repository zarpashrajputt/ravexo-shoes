// This component shows the admin login form.
function AdminLoginForm() {
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
              <form>
                {/* Keep the email field in its own spacing block. */}
                <div className="mb-3">
                  {/* Connect the Email label to its input. */}
                  <label htmlFor="adminEmail" className="form-label">Email</label>
                  {/* Accept an email address and require a value. */}
                  <input type="email" className="form-control form-control-lg" id="adminEmail" required />
                </div>{/* Close the email field block. */}
                {/* Keep the password field in its own spacing block. */}
                <div className="mb-3">
                  {/* Connect the Password label to its input. */}
                  <label htmlFor="adminPassword" className="form-label">Password</label>
                  {/* Hide the password while it is being entered. */}
                  <input type="password" className="form-control form-control-lg" id="adminPassword" required />
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