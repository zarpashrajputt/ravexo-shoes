import Order from "../../models/admin/order.js";

export const orderController = (req, res) => {
  const {
    managementOrderId,
    managementCustomerName,
    managementProductName,
    managementStatus,
    managementRider
  } = req.body;

  const newOrder = new Order({
    managementOrderId,
    managementCustomerName,
    managementProductName,
    managementStatus,
    managementRider
  });

  newOrder.save()
    .then(() => res.status(201).send("Order saved successfully"))
    .catch((error) =>
      res.status(500).send("Error saving order: " + error)
    );
};

export const updateOrderController = (req, res) => {
  const {
    managementOrderId,
    managementStatus,
    managementRider
  } = req.body;

  Order.findOne({ managementOrderId: managementOrderId })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      order.managementStatus = managementStatus;
      order.managementRider = managementRider;

      order.save()
        .then(() => res.status(200).send("Order updated successfully"))
        .catch((error) =>
          res.status(500).send("Error updating order: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding order: " + error)
    );
};

export const deleteOrderController = (req, res) => {
  const { managementOrderId } = req.params;

  Order.findOne({ managementOrderId: managementOrderId })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      if (order.managementStatus !== "pending" && order.managementStatus !== "cancelled") {
        return res.status(400).send("Only pending or cancelled orders can be deleted");
      }

      Order.findOneAndDelete({ _id: order._id })
        .then(() => res.status(200).send("Order deleted successfully"))
        .catch((error) =>
          res.status(500).send("Error deleting order: " + error)
        );
    })
    .catch((error) =>
      res.status(500).send("Error finding order: " + error)
    );
};