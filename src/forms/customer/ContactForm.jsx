// This form displays the customer contact fields.
function ContactForm() {
  return (
    // Center the contact form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">Name</label>
                  <input type="text" className="form-control form-control-lg" id="contactName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" id="contactEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label">Message</label>
                  <textarea className="form-control form-control-lg" id="contactMessage" rows="4" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;