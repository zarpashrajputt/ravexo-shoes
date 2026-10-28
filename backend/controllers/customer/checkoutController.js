import Checkout from "../../models/customer/checkout.js";

// ADD CHECKOUT - POST
export const checkoutController = (req, res) => {
  const {
    checkoutName,
    checkoutEmail,
    checkoutPhone,
    checkoutStreet,
    checkoutCity,
    checkoutPostalCode,
    checkoutNotes
  } = req.body;

  const newCheckout = new Checkout({
    checkoutName: checkoutName,
    checkoutEmail: checkoutEmail,
    checkoutPhone: checkoutPhone,
    checkoutStreet: checkoutStreet,
    checkoutCity: checkoutCity,
    checkoutPostalCode: checkoutPostalCode,
    checkoutNotes: checkoutNotes
  });

  newCheckout.save()
    .then(() => res.status(201).send("Checkout saved successfully"))
    .catch((error) => res.status(500).send("Error saving checkout: " + error));
};


// UPDATE CHECKOUT
export const updateCheckoutController = (req, res) => {
  const { id } = req.params;

  const {
    checkoutName,
    checkoutEmail,
    checkoutPhone,
    checkoutStreet,
    checkoutCity,
    checkoutPostalCode,
    checkoutNotes
  } = req.body;

  Checkout.findById(id)
    .then((checkout) => {
      if (!checkout) {
        return res.status(404).send("Checkout not found");
      }

      checkout.checkoutName = checkoutName;
      checkout.checkoutEmail = checkoutEmail;
      checkout.checkoutPhone = checkoutPhone;
      checkout.checkoutStreet = checkoutStreet;
      checkout.checkoutCity = checkoutCity;
      checkout.checkoutPostalCode = checkoutPostalCode;
      checkout.checkoutNotes = checkoutNotes;

      checkout.save()
        .then(() => res.status(200).send("Checkout updated successfully"))
        .catch((error) =>
          res.status(500).send("Error updating checkout: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding checkout: " + error)
    );
};


// DELETE CHECKOUT
export const deleteCheckoutController = (req, res) => {
  const { id } = req.params;

  Checkout.findByIdAndDelete(id)
    .then((checkout) => {
      if (!checkout) {
        return res.status(404).send("Checkout not found");
      }

      res.status(200).send("Checkout deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting checkout: " + error)
    );
};