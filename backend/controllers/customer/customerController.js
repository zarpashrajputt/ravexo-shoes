import Customer from "../../models/customer/customer.js";

// CUSTOMER SIGN UP - POST
export const customerController = (req, res) => {
  const { signupName, signupEmail, signupPhone, signupPassword } = req.body;

  const newCustomer = new Customer({
    signupName: signupName,
    signupEmail: signupEmail,
    signupPhone: signupPhone,
    signupPassword: signupPassword
  });

  newCustomer.save()
    .then(() => res.status(201).send("Customer saved successfully"))
    .catch((error) => res.status(500).send("Error saving customer: " + error));
};

// CUSTOMER LOGIN - POST
export const loginController = (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  Customer.findOne({ signupEmail: loginEmail, signupPassword: loginPassword })
    .then((customer) => {
      if (!customer) {
        return res.status(401).send("Invalid email or password");
      }

      res.status(200).send("Customer found");
    })
    .catch((error) => res.status(500).send("Error finding customer: " + error));
};