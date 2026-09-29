// Import the Bootstrap container styling is already loaded in the project.
// Import the customer login form.
import LoginForm from './forms/customer/LoginForm.jsx';
// Import the customer checkout form.
import CheckoutForm from './forms/customer/CheckoutForm.jsx';
// Import the customer contact form.
import ContactForm from './forms/customer/ContactForm.jsx';
// Import the customer sign-up form.
import SignUpForm from './forms/customer/SignUpForm.jsx';
// Import the customer order form.
import OrderForm from './forms/customer/OrderForm.jsx';
// Import the customer payment form.
import PaymentForm from './forms/customer/PaymentForm.jsx';
// Import the admin login form.
import AdminLoginForm from './forms/admin/AdminLoginForm.jsx';
// Import the admin add product form.
import AddProductForm from './forms/admin/AddProductForm.jsx';
// Import the admin delete product form.
import DeleteProductForm from './forms/admin/DeleteProductForm.jsx';
// Import the admin edit product form.
import EditProductForm from './forms/admin/EditProductForm.jsx';
// Import the delivery rider inventory form.
import InventoryForm from './forms/deliveryRider/InventoryForm.jsx';
// Import the delivery rider order management form.
import OrderManagementForm from './forms/deliveryRider/OrderManagementForm.jsx';

// This component is used to run the forms one by one.
function FormsDemo() {
  // Return contains the form that is shown in the browser.
  return (
    // Bootstrap container with top margin.
    <div className="container mt-5">
    {/* <AdminLoginForm /> */}
    {/* <AddProductForm /> */}
      {/* <DeleteProductForm /> */}
      {/* <EditProductForm /> */}
      {/* delivery rider forms */}
      {/* <InventoryForm /> */}
      {/* <OrderManagementForm /> */}
      {/* customer forms */}
      {/* <LoginForm /> */}
      {/* <CheckoutForm /> */}
      {/* <ContactForm /> */}
      {/* <SignUpForm /> */}
      <OrderForm />
      {/* <PaymentForm /> */}
      
    </div>
  );
}

// Export the component so main.jsx can use it.
export default FormsDemo;