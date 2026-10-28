import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  deliveryOrderId: { type: String, required: true },
  deliveryStatus: { type: String, required: true },
  deliveryNotes: { type: String }
});

const Delivery = mongoose.model("Delivery", deliverySchema);

export default Delivery;