// This form displays the shoe and quantity selection for an order.
function OrderForm() {
  return (
    // Center the order form in a responsive Bootstrap card.
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center fw-bold mb-4">Place an Order</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="orderShoe" className="form-label">Shoe</label>
                  <select className="form-select form-select-lg" id="orderShoe" defaultValue="" style={{ borderColor: '#063b3b', boxShadow: '0 0 0 0.25rem rgba(6, 59, 59, 0.25)' }} required>
                    <option value="" disabled>Select a shoe</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="orderSize" className="form-label">Size</label>
                  <select className="form-select form-select-lg" id="orderSize" defaultValue="" style={{ borderColor: '#063b3b', boxShadow: '0 0 0 0.25rem rgba(6, 59, 59, 0.25)' }} required>
                    <option value="" disabled>Select a size</option>
                    <option value="40">EUR 40</option>
                    <option value="41">EUR 41</option>
                    <option value="42">EUR 42</option>
                    <option value="43">EUR 43</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="orderQuantity" className="form-label">Quantity</label>
                  <input type="number" className="form-control form-control-lg" id="orderQuantity" min="1" required />
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Place Order</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;