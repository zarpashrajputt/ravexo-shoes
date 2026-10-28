import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
  checkoutName: { type: String, required: true },
  checkoutEmail: { type: String, required: true },
  checkoutPhone: { type: String, required: true },
  checkoutStreet: { type: String, required: true },
  checkoutCity: { type: String, required: true },
  checkoutPostalCode: { type: String, required: true },
  checkoutNotes: { type: String, required: false }
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

export default Checkout;