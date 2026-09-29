// This form displays the customer sign-up fields.
function SignUpForm() {
  return (
    // Center the sign-up form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Create Account</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="signupName" className="form-label">Name</label>
                  <input type="text" className="form-control form-control-lg" id="signupName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" id="signupEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">Password</label>
                  <input type="password" className="form-control form-control-lg" id="signupPassword" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;