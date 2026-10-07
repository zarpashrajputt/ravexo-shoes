// Define the form customers use to review a purchased product.
function ReviewForm() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              <h4 className="text-center mb-4">Write a Review</h4>
              <form>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <tbody>
                      <tr>
                        <th scope="row"><label htmlFor="reviewOrderId" className="form-label mb-0">Order ID</label></th>
                        <td><input type="text" className="form-control" id="reviewOrderId" required /></td>
                      </tr>
                      <tr>
                        <th scope="row"><label htmlFor="reviewProduct" className="form-label mb-0">Product Name</label></th>
                        <td><input type="text" className="form-control" id="reviewProduct" required /></td>
                      </tr>
                      <tr>
                        <th scope="row"><label htmlFor="reviewRating" className="form-label mb-0">Rating</label></th>
                        <td>
                          <select className="form-select" id="reviewRating" defaultValue="" required>
                            <option value="" disabled>Select a rating</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"><label htmlFor="reviewComment" className="form-label mb-0">Comment</label></th>
                        <td><textarea className="form-control" id="reviewComment" rows="4" required /></td>
                      </tr>
                    </tbody>
                  </table>
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