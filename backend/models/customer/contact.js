import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactSubject: { type: String, required: true },
  contactMessage: { type: String, required: true }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;