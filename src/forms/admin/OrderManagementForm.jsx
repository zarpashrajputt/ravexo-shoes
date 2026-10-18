// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for order field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for the order management fields.
const orderManagementSchema = z.object({
  // Accept the read-only order ID as text.
  managementOrderId: z.string().min(1, "Order ID is required"),
  // Accept the read-only customer name as text.
  managementCustomerName: z.string().min(1, "Customer name is required"),
  // Accept the read-only product name as text.
  managementProductName: z.string().min(1, "Product name is required"),
  // Limit status to the options shown in the form.
  managementStatus: z.enum(["pending", "confirmed", "shipped", "delivered", "cancelled"], { message: "Please select an order status" }),
  // Limit rider assignment to the options shown in the form.
  managementRider: z.enum(["rider-1", "rider-2", "rider-3"], { message: "Please select a rider" }),
});

// This form displays order details and a status selector.
function OrderManagementForm() {
  // Connect the order schema and empty select values to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(orderManagementSchema),
    defaultValues: { managementStatus: "", managementRider: "" },
  });
  // Log valid order updates after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              <h4 className="text-center mb-4">Manage Order</h4>
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Assign Rider</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input type="text" className="form-control" id="managementOrderId" aria-label="Order ID" readOnly {...register("managementOrderId")} />{/* Display validation feedback for the order ID. */}{errors.managementOrderId && <span className="text-danger">{errors.managementOrderId.message}</span>}</td>
                        <td><input type="text" className="form-control" id="managementCustomerName" aria-label="Customer Name" readOnly {...register("managementCustomerName")} />{/* Display validation feedback for the customer name. */}{errors.managementCustomerName && <span className="text-danger">{errors.managementCustomerName.message}</span>}</td>
                        <td><input type="text" className="form-control" id="managementProductName" aria-label="Product Name" readOnly {...register("managementProductName")} />{/* Display validation feedback for the product name. */}{errors.managementProductName && <span className="text-danger">{errors.managementProductName.message}</span>}</td>
                        <td>
                          <select className="form-select" id="managementStatus" aria-label="Order Status" {...register("managementStatus")}>
                            <option value="" disabled>Select a status</option>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          {/* Display validation feedback for the order status. */}
                          {errors.managementStatus && <span className="text-danger">{errors.managementStatus.message}</span>}
                        </td>
                        <td>
                          <select className="form-select" id="managementRider" aria-label="Assign Rider" {...register("managementRider")}>
                            <option value="" disabled>Select rider</option>
                            <option value="rider-1">Rider 1</option>
                            <option value="rider-2">Rider 2</option>
                            <option value="rider-3">Rider 3</option>
                          </select>
                          {/* Display validation feedback for the rider. */}
                          {errors.managementRider && <span className="text-danger">{errors.managementRider.message}</span>}
                        </td>
                        <td>
                          <button type="submit" className="btn text-nowrap" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>
                            Update Order
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementForm;