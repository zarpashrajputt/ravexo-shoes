// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for order field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";
import { orderManagementAxiosFunction } from "../api.jsx";


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
  });
  
  async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await orderManagementAxiosFunction(data);

  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              <h4 className="text-center mb-4">Manage Order</h4>
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="mb-3">
                  <label htmlFor="managementOrderId" className="form-label">Order ID</label>
                  <input type="text" className="form-control form-control-lg" id="managementOrderId" {...register("managementOrderId")} />
                  {errors.managementOrderId && <span className="text-danger">{errors.managementOrderId.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="managementCustomerName" className="form-label">Customer Name</label>
                  <input type="text" className="form-control form-control-lg" id="managementCustomerName" {...register("managementCustomerName")} />
                  {errors.managementCustomerName && <span className="text-danger">{errors.managementCustomerName.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="managementProductName" className="form-label">Product Name</label>
                  <input type="text" className="form-control form-control-lg" id="managementProductName" {...register("managementProductName")} />
                  {errors.managementProductName && <span className="text-danger">{errors.managementProductName.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="managementStatus" className="form-label">Order Status</label>
                  <select className="form-select form-select-lg" id="managementStatus" {...register("managementStatus")}>
                    <option value="" disabled>Select a status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  {errors.managementStatus && <span className="text-danger">{errors.managementStatus.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="managementRider" className="form-label">Assign Rider</label>
                  <select className="form-select form-select-lg" id="managementRider" {...register("managementRider")}>
                    <option value="" disabled>Select rider</option>
                    <option value="rider-1">Rider 1</option>
                    <option value="rider-2">Rider 2</option>
                    <option value="rider-3">Rider 3</option>
                  </select>
                  {errors.managementRider && <span className="text-danger">{errors.managementRider.message}</span>}
                </div>
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>
                  Update Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagementForm;