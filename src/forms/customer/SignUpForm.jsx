// This form displays the customer sign-up fields.
function SignUpForm() {
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
              <form>
                {/* Keep the full-name label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the name input. */}
                  <label htmlFor="signupName" className="form-label">Full Name</label>
                  {/* Require the customer's full name. */}
                  <input type="text" className="form-control form-control-lg" id="signupName" required />
                </div>
                {/* Keep the email label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the email input. */}
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  {/* Require an email address and use browser email validation. */}
                  <input type="email" className="form-control form-control-lg" id="signupEmail" required />
                </div>
                {/* Keep the phone label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the phone input. */}
                  <label htmlFor="signupPhone" className="form-label">Phone</label>
                  {/* Require a phone number and show its expected format. */}
                  <input type="tel" className="form-control form-control-lg" id="signupPhone" placeholder="03XX-XXXXXXX" required />
                </div>
                {/* Keep the password label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the password input. */}
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  {/* Hide the entered password and require a value. */}
                  <input type="password" className="form-control form-control-lg" id="signupPassword" required />
                </div>
                {/* Add extra space after the password confirmation field. */}
                <div className="mb-4">
                  {/* Connect this label to the confirmation input. */}
                  <label htmlFor="signupConfirmPassword" className="form-label">Confirm Password</label>
                  {/* Ask the customer to enter the password again. */}
                  <input type="password" className="form-control form-control-lg" id="signupConfirmPassword" required />
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