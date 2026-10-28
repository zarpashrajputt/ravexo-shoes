import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Admin Routes
import productRoutes from "./routes/admin/productRoutes.js";
import adminRoutes from "./routes/admin/adminRoutes.js";
import orderRoutes from "./routes/admin/orderRoutes.js";

// Customer Routes
import customerRoutes from "./routes/customer/customerRoutes.js";
import contactRoutes from "./routes/customer/contactRoutes.js";
import checkoutRoutes from "./routes/customer/checkoutRoutes.js";
import paymentRoutes from "./routes/customer/paymentRoutes.js";
import reviewRoutes from "./routes/customer/reviewRoutes.js";

// Rider Routes
import riderRoutes from "./routes/deliveryRider/riderLoginRoutes.js";
import deliveryRoutes from "./routes/deliveryRider/deliveryStatusRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Admin
app.use("/add_product", productRoutes);
app.use("/admin_login", adminRoutes);
app.use("/order_management", orderRoutes);

// Customer
app.use("/customer_signup", customerRoutes);
app.use("/contact_us", contactRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/customer_payment", paymentRoutes);
app.use("/customer_review", reviewRoutes);

// Rider
app.use("/rider_login", riderRoutes);
app.use("/delivery_status", deliveryRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB error:", error.message));

export default app;