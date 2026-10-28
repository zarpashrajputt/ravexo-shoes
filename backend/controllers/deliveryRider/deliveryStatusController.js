import Delivery from "../../models/deliveryRider/delivery.js";

// UPDATE DELIVERY STATUS
export const deliveryController = (req, res) => {
  const { deliveryOrderId, deliveryStatus, deliveryNotes } = req.body;

  Delivery.findOne({ deliveryOrderId: deliveryOrderId })
    .then((delivery) => {
      if (!delivery) {
        return res.status(404).send("Delivery not found");
      }

      delivery.deliveryStatus = deliveryStatus;
      delivery.deliveryNotes = deliveryNotes;

      delivery.save()
        .then(() => res.status(200).send("Delivery updated successfully"))
        .catch((error) => res.status(500).send("Error updating delivery: " + error));
    })
    .catch((error) => res.status(500).send("Error finding delivery: " + error));
};