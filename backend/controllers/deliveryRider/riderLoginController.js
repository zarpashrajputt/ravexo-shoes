import Rider from "../../models/deliveryRider/rider.js";

export const riderLoginController = (req, res) => {
  const { riderEmail, riderPassword } = req.body;

  Rider.findOne({ riderEmail: riderEmail, riderPassword: riderPassword })
    .then((rider) => {
      if (!rider) {
        return res.status(401).send("Invalid email or password");
      }

      res.status(200).send("Rider found");
    })
    .catch((error) => res.status(500).send("Error finding rider: " + error));
};