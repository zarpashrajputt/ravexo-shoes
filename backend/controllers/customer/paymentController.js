import Payment from "../../models/customer/payment.js";

// ADD PAYMENT - POST
export const paymentController = (req, res) => {
  const { paymentMethod } = req.body;

  const newPayment = new Payment({
    paymentMethod: paymentMethod
  });

  newPayment.save()
    .then(() => res.status(201).send("Payment method saved successfully"))
    .catch((error) => res.status(500).send("Error saving payment: " + error));
};


// UPDATE PAYMENT
export const updatePaymentController = (req, res) => {
  const { id } = req.params;
  const { paymentMethod } = req.body;

  Payment.findById(id)
    .then((payment) => {
      if (!payment) {
        return res.status(404).send("Payment not found");
      }

      payment.paymentMethod = paymentMethod;

      payment.save()
        .then(() => res.status(200).send("Payment updated successfully"))
        .catch((error) =>
          res.status(500).send("Error updating payment: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding payment: " + error)
    );
};


// DELETE PAYMENT
export const deletePaymentController = (req, res) => {
  const { id } = req.params;

  Payment.findByIdAndDelete(id)
    .then((payment) => {
      if (!payment) {
        return res.status(404).send("Payment not found");
      }

      res.status(200).send("Payment deleted successfully");
    })
    .catch((error) =>
      res.status(500).send("Error deleting payment: " + error)
    );
};