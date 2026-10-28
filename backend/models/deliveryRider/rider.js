import mongoose from "mongoose";

const riderSchema = new mongoose.Schema({
  riderEmail: { type: String, required: true },
  riderPassword: { type: String, required: true }
});

const Rider = mongoose.model("Rider", riderSchema);

export default Rider;