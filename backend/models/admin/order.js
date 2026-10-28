import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  managementOrderId: { type: String, required: true },
  managementCustomerName: { type: String, required: true },
  managementProductName: { type: String, required: true },
  managementStatus: { type: String, required: true },
  managementRider: { type: String, required: true }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;