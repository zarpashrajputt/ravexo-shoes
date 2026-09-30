import LoginForm from './forms/customer/LoginForm.jsx';
import CheckoutForm from './forms/customer/CheckoutForm.jsx';
import ContactForm from './forms/customer/ContactForm.jsx';
import SignUpForm from './forms/customer/SignUpForm.jsx';
import PaymentForm from './forms/customer/PaymentForm.jsx';
import ReviewForm from './forms/customer/ReviewForm.jsx';
import AdminLoginForm from './forms/admin/AdminLoginForm.jsx';
import AddProductForm from './forms/admin/AddProductForm.jsx';
import EditProductForm from './forms/admin/EditProductForm.jsx';
import OrderManagementForm from './forms/admin/OrderManagementForm.jsx';
import RiderLoginForm from './forms/deliveryRider/RiderLoginForm.jsx';
import DeliveryStatusForm from './forms/deliveryRider/DeliveryStatusForm.jsx';

function FormsDemo() {
  return (
    <div className="container mt-5">
   {/* Admin Forms */}
      {/* <AdminLoginForm /> */}
      {/* <AddProductForm /> */}
      {/* <EditProductForm /> */}
      {/* <OrderManagementForm /> */}

     {/* customer forms */}
      {/* <SignUpForm /> */}
      {/* <LoginForm /> */}
      {/* <ContactForm /> */}
      {/* <CheckoutForm /> */}
      {/* <PaymentForm /> */}
      <ReviewForm />

    {/* Delivery Rider Forms */}
      {/* <RiderLoginForm /> */}
      {/* <DeliveryStatusForm /> */}
    </div>
  );
}

export default FormsDemo;