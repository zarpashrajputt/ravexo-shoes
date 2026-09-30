function ReviewForm() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Review Your Shoe</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="reviewOrderId" className="form-label">Order ID</label>
                  <input type="text" className="form-control form-control-lg" id="reviewOrderId" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewProduct" className="form-label">Shoe</label>
                  <input type="text" className="form-control form-control-lg" id="reviewProduct" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="reviewRating" className="form-label">Rating</label>
                  <select className="form-select form-select-lg" id="reviewRating" defaultValue="" required>
                    <option value="" disabled>Select a rating</option>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very good</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="reviewComment" className="form-label">Your Review</label>
                  <textarea className="form-control form-control-lg" id="reviewComment" rows="4" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;