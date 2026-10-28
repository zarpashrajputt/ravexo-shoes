import axios from "axios";

// ADMIN LOGIN
export async function adminLoginAxiosFunction(data) {
  console.log("adminLoginAxiosFunction called");
  return await axios.post("http://localhost:3000/admin_login", data);
}


// ADD PRODUCT
export async function addProductAxiosFunction(data) {
  console.log("addProductAxiosFunction called");
  return await axios.post("http://localhost:3000/add_product", data);
}


// EDIT PRODUCT
export async function editProductAxiosFunction(data) {
  console.log("editProductAxiosFunction called", data);
  return await axios.post("http://localhost:3000/add_product/edit", data);
}


// DELETE PRODUCT
export async function deleteProductAxiosFunction(data) {
  console.log("deleteProductAxiosFunction called", data);
  return await axios.delete("http://localhost:3000/add_product", {
    data: data
  });
}


// ORDER MANAGEMENT
export async function orderManagementAxiosFunction(data) {
  console.log("orderManagementAxiosFunction called", data);
  return await axios.post("http://localhost:3000/order_management", data);
}


// UPDATE ORDER
export async function updateOrderAxiosFunction(data) {
  console.log("updateOrderAxiosFunction called", data);
  return await axios.post("http://localhost:3000/order_management/edit", data);
}


// DELETE ORDER
export async function deleteOrderAxiosFunction(data) {
  console.log("deleteOrderAxiosFunction called", data);

  return await axios.delete(
    "http://localhost:3000/order_management/" + data.managementOrderId
  );
}


// CHECKOUT
export async function checkoutAxiosFunction(data) {
  console.log("checkoutAxiosFunction called", data);
  return await axios.post("http://localhost:3000/checkout", data);
}


// UPDATE CHECKOUT
export async function updateCheckoutAxiosFunction(data) {
  console.log("updateCheckoutAxiosFunction called", data);

  return await axios.post(
    "http://localhost:3000/checkout/edit/" + data.id,
    data
  );
}


// DELETE CHECKOUT
export async function deleteCheckoutAxiosFunction(data) {
  console.log("deleteCheckoutAxiosFunction called", data);

  return await axios.delete(
    "http://localhost:3000/checkout/" + data.id
  );
}


// CONTACT US
export async function contactAxiosFunction(data) {
  console.log("contactAxiosFunction called", data);
  return await axios.post("http://localhost:3000/contact_us", data);
}


// DELETE CONTACT
export async function deleteContactAxiosFunction(data) {
  console.log("deleteContactAxiosFunction called", data);

  return await axios.delete(
    "http://localhost:3000/contact_us/" + data.id
  );
}


// CUSTOMER LOGIN
export async function loginAxiosFunction(data) {
  console.log("loginAxiosFunction called");
  return await axios.post("http://localhost:3000/customer_signup/login", data);
}


// PAYMENT
export async function paymentAxiosFunction(data) {
  console.log("paymentAxiosFunction called");
  return await axios.post("http://localhost:3000/customer_payment", data);
}


// UPDATE PAYMENT
export async function updatePaymentAxiosFunction(data) {
  console.log("updatePaymentAxiosFunction called", data);

  return await axios.post(
    "http://localhost:3000/customer_payment/edit",
    data
  );
}


// DELETE PAYMENT
export async function deletePaymentAxiosFunction(data) {
  console.log("deletePaymentAxiosFunction called", data);

  return await axios.delete(
    "http://localhost:3000/customer_payment",
    {
      data: data
    }
  );
}


// REVIEW
export async function reviewAxiosFunction(data) {
  console.log("reviewAxiosFunction called", data);
  return await axios.post("http://localhost:3000/customer_review", data);
}


// UPDATE REVIEW
export async function updateReviewAxiosFunction(data) {
  console.log("updateReviewAxiosFunction called", data);

  return await axios.post(
    "http://localhost:3000/customer_review/edit",
    data
  );
}


// DELETE REVIEW
export async function deleteReviewAxiosFunction(data) {
  console.log("deleteReviewAxiosFunction called", data);

  return await axios.delete(
    "http://localhost:3000/customer_review",
    {
      data: data
    }
  );
}


// CUSTOMER SIGN UP
export async function signUpAxiosFunction(data) {
  console.log("signUpAxiosFunction called");
  return await axios.post("http://localhost:3000/customer_signup", data);
}


// DELIVERY STATUS
export async function deliveryStatusAxiosFunction(data) {
  console.log("deliveryStatusAxiosFunction called", data);
  return await axios.post("http://localhost:3000/delivery_status", data);
}


// RIDER LOGIN
export async function riderLoginAxiosFunction(data) {
  console.log("riderLoginAxiosFunction called", data);
  return await axios.post("http://localhost:3000/rider_login", data);
}