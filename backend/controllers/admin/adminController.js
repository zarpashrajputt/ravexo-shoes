import Admin from "../../models/admin/admin.js";

export const adminController = (req, res) => {
  const { adminEmail, adminPassword } = req.body;

  Admin.findOne({ adminEmail: adminEmail, adminPassword: adminPassword })
    .then((admin) => {
      if (!admin) {
        return res.status(401).send("Invalid email or password");
      }

      res.status(200).send("Admin found");
    })
    .catch((error) =>
      res.status(500).send("Error finding admin: " + error)
    );
};