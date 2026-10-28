import Contact from "../../models/customer/contact.js";

// ADD CONTACT - POST
export const contactController = (req, res) => {
  const { contactName, contactEmail, contactSubject, contactMessage } = req.body;

  const newContact = new Contact({
    contactName: contactName,
    contactEmail: contactEmail,
    contactSubject: contactSubject,
    contactMessage: contactMessage
  });

  newContact.save()
    .then(() => res.status(201).send("Contact message saved successfully"))
    .catch((error) => res.status(500).send("Error saving contact: " + error));
};

// DELETE CONTACT
export const deleteContactController = (req, res) => {
  const { id } = req.params;

  Contact.findOneAndDelete({ _id: id })
    .then((contact) => {
      if (!contact) {
        return res.status(404).send("Contact message not found");
      }

      res.status(200).send("Contact message deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting contact message: " + error)
    );
};