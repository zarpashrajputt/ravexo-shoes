// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for delivery field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";
import { deliveryStatusAxiosFunction } from "../api.jsx";

// Define validation rules for delivery status updates.
const deliveryStatusSchema = z.object({
  // Accept the read-only order ID as text.
  deliveryOrderId: z.string().min(1, "Order ID is required"),
  // Accept the read-only customer name as text.
  deliveryCustomerName: z.string().min(1, "Customer name is required"),
  // Accept the read-only delivery address as text.
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  // Limit status to the options shown in the form.
  deliveryStatus: z.enum(["picked-up", "out-for-delivery", "delivered", "failed"], { message: "Please select a delivery status" }),
  // Allow optional remarks up to 500 characters.
  deliveryNotes: z.string().max(500, "Remarks must be at most 500 characters"),
});

// Define the form delivery riders use to update an order's delivery status.
function DeliveryStatusForm() {
  // Connect the delivery schema and empty select and notes values to the form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(deliveryStatusSchema),
    defaultValues: { deliveryStatus: "", deliveryNotes: "" },
  });
  // Log valid delivery updates after submission.
  async function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
    await deliveryStatusAxiosFunction(data);

  }

  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the delivery form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify this form as a delivery status update. */}
              <h4 className="text-center mb-4">Update Delivery Status</h4>
              {/* Group the order details, status, and remarks. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the order ID label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the order ID input. */}
                  <label htmlFor="deliveryOrderId" className="form-label">Order ID</label>
                  {/* Display the order ID without allowing changes. */}
                  <input type="text" className="form-control form-control-lg" id="deliveryOrderId" {...register("deliveryOrderId")} />
                  {/* Display validation feedback for the order ID. */}
                  {errors.deliveryOrderId && <span className="text-danger">{errors.deliveryOrderId.message}</span>}
                </div>
                {/* Keep the customer name label and read-only input together. */}
                <div className="mb-3">
                  {/* Connect this label to the customer name input. */}
                  <label htmlFor="deliveryCustomerName" className="form-label">Customer Name</label>
                  {/* Display the customer name without allowing changes. */}
                  <input type="text" className="form-control form-control-lg" id="deliveryCustomerName" {...register("deliveryCustomerName")} />
                  {/* Display validation feedback for the customer name. */}
                  {errors.deliveryCustomerName && <span className="text-danger">{errors.deliveryCustomerName.message}</span>}
                </div>
                {/* Keep the delivery address label and read-only text area together. */}
                <div className="mb-3">
                  {/* Connect this label to the delivery address text area. */}
                  <label htmlFor="deliveryAddress" className="form-label">Delivery Address</label>
                  {/* Display the delivery address in two read-only lines. */}
                  <textarea className="form-control form-control-lg" id="deliveryAddress" rows="2" {...register("deliveryAddress")} />
                  {/* Display validation feedback for the delivery address. */}
                  {errors.deliveryAddress && <span className="text-danger">{errors.deliveryAddress.message}</span>}
                </div>
                {/* Keep the delivery status label and menu together. */}
                <div className="mb-3">
                  {/* Connect this label to the delivery status menu. */}
                  <label htmlFor="deliveryStatus" className="form-label">Status</label>
                  {/* Require the rider to choose the current delivery status. */}
                  <select className="form-select form-select-lg" id="deliveryStatus" {...register("deliveryStatus")}>
                    {/* Show an unselectable prompt before a status is chosen. */}
                    <option value="" disabled>Select a status</option>
                    {/* Allow the rider to mark the order as picked up. */}
                    <option value="picked-up">Picked Up</option>
                    {/* Allow the rider to mark the order as out for delivery. */}
                    <option value="out-for-delivery">Out for Delivery</option>
                    {/* Allow the rider to mark the order as delivered. */}
                    <option value="delivered">Delivered</option>
                    {/* Allow the rider to mark the delivery as failed. */}
                    <option value="failed">Failed</option>
                  </select>
                  {/* Display validation feedback for the delivery status. */}
                  {errors.deliveryStatus && <span className="text-danger">{errors.deliveryStatus.message}</span>}
                </div>
                {/* Add extra space below the optional delivery remarks. */}
                <div className="mb-4">
                  {/* Connect this label to the remarks text area. */}
                  <label htmlFor="deliveryNotes" className="form-label">Remarks (optional)</label>
                  {/* Allow the rider to add optional notes in a three-row text area. */}
                  <textarea className="form-control form-control-lg" id="deliveryNotes" rows="3" {...register("deliveryNotes")} />
                  {/* Display validation feedback for optional remarks. */}
                  {errors.deliveryNotes && <span className="text-danger">{errors.deliveryNotes.message}</span>}
                </div>
                {/* Submit the status update using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Update Status</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the delivery status form available to other files.
export default DeliveryStatusForm;