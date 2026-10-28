import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  paymentMethod: { type: String, required: true }
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;