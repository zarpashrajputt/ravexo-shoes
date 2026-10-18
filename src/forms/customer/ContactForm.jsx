// Import React Hook Form for form registration and submission.
import { useForm } from "react-hook-form";
// Import Zod for contact field validation.
import { z } from "zod";
// Connect Zod validation to React Hook Form.
import { zodResolver } from "@hookform/resolvers/zod";

// Define validation rules for contact messages.
const contactSchema = z.object({
  // Require a sender name between 2 and 100 characters.
  contactName: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters").max(100, "Name must be at most 100 characters"),
  // Require a valid email address.
  contactEmail: z.string().min(1, "Email is required").email("Invalid email"),
  // Require a concise subject.
  contactSubject: z.string().min(1, "Subject is required").min(2, "Subject must be at least 2 characters").max(120, "Subject must be at most 120 characters"),
  // Require a message between 10 and 2000 characters.
  contactMessage: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters").max(2000, "Message must be at most 2000 characters"),
});

// This form displays the customer contact fields.
function ContactForm() {
  // Connect the contact schema to the message form.
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });
  // Log valid contact data after submission.
  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  // Return the customer contact form layout.
  return (
    // Add page spacing and apply Bootstrap's responsive container width.
    <div className="container py-5">
      {/* Center the form row horizontally. */}
      <div className="row justify-content-center">
        {/* Adjust the form width for different screen sizes. */}
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          {/* Frame the contact form in a card with a subtle shadow. */}
          <div className="card shadow-sm border-0 rounded-4">
            {/* Add padding inside the card. */}
            <div className="card-body p-4 p-md-5">
              {/* Display the store name. */}
              <h2 className="text-success fw-bold text-center">Ravexo.pk</h2>
              {/* Identify the purpose of this form. */}
              <h4 className="text-center mb-4">Contact Us</h4>
              {/* Group the message fields and submit button. */}
              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                {/* Keep the name label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the name input. */}
                  <label htmlFor="contactName" className="form-label">Name</label>
                  {/* Require the sender's name. */}
                  <input type="text" className="form-control form-control-lg" id="contactName" {...register("contactName")} />
                  {/* Display validation feedback for the name. */}
                  {errors.contactName && <span className="text-danger">{errors.contactName.message}</span>}
                </div>
                {/* Keep the email label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the email input. */}
                  <label htmlFor="contactEmail" className="form-label">Email</label>
                  {/* Require a valid email address. */}
                  <input type="email" className="form-control form-control-lg" id="contactEmail" {...register("contactEmail")} />
                  {/* Display validation feedback for the email. */}
                  {errors.contactEmail && <span className="text-danger">{errors.contactEmail.message}</span>}
                </div>
                {/* Keep the subject label and input together. */}
                <div className="mb-3">
                  {/* Connect this label to the subject input. */}
                  <label htmlFor="contactSubject" className="form-label">Subject</label>
                  {/* Require a subject for the message. */}
                  <input type="text" className="form-control form-control-lg" id="contactSubject" {...register("contactSubject")} />
                  {/* Display validation feedback for the subject. */}
                  {errors.contactSubject && <span className="text-danger">{errors.contactSubject.message}</span>}
                </div>
                {/* Keep the message label and multi-line input together. */}
                <div className="mb-3">
                  {/* Connect this label to the message text area. */}
                  <label htmlFor="contactMessage" className="form-label">Message</label>
                  {/* Require a message and display a five-row text area. */}
                  <textarea className="form-control form-control-lg" id="contactMessage" rows="5" {...register("contactMessage")} />
                  {/* Display validation feedback for the message. */}
                  {errors.contactMessage && <span className="text-danger">{errors.contactMessage.message}</span>}
                </div>
                {/* Submit the message using the store's button colors. */}
                <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: '#063b3b', borderColor: '#063b3b', color: '#efd39b' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the contact form available to other files.
export default ContactForm;