import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AdminMenu from './AdminMenu.jsx';
import CustomerMenu from './CustomerMenu.jsx';
import RiderMenu from './RiderMenu.jsx';
import AdminLoginForm from './forms/admin/AdminLoginForm.jsx';
import AddProductForm from './forms/admin/AddProductForm.jsx';
import EditProductForm from './forms/admin/EditProductForm.jsx';
import OrderManagementForm from './forms/admin/OrderManagementForm.jsx';
import SignUpForm from './forms/customer/SignUpForm.jsx';
import LoginForm from './forms/customer/LoginForm.jsx';
import ContactForm from './forms/customer/ContactForm.jsx';
import CheckoutForm from './forms/customer/CheckoutForm.jsx';
import PaymentForm from './forms/customer/PaymentForm.jsx';
import ReviewForm from './forms/customer/ReviewForm.jsx';
import RiderLoginForm from './forms/deliveryRider/RiderLoginForm.jsx';
import DeliveryStatusForm from './forms/deliveryRider/DeliveryStatusForm.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/admin', element: <AdminMenu /> },
  { path: '/admin-login', element: <><AdminMenu /><AdminLoginForm /></> },
  { path: '/add-product', element: <><AdminMenu /><AddProductForm /></> },
  { path: '/edit-product', element: <><AdminMenu /><EditProductForm /></> },
  { path: '/order-management', element: <><AdminMenu /><OrderManagementForm /></> },
  { path: '/customer', element: <CustomerMenu /> },
  { path: '/signup', element: <><CustomerMenu /><SignUpForm /></> },
  { path: '/login', element: <><CustomerMenu /><LoginForm /></> },
  { path: '/contact', element: <><CustomerMenu /><ContactForm /></> },
  { path: '/checkout', element: <><CustomerMenu /><CheckoutForm /></> },
  { path: '/payment', element: <><CustomerMenu /><PaymentForm /></> },
  { path: '/review', element: <><CustomerMenu /><ReviewForm /></> },
  { path: '/rider', element: <RiderMenu /> },
  { path: '/rider-login', element: <><RiderMenu /><RiderLoginForm /></> },
  { path: '/delivery-status', element: <><RiderMenu /><DeliveryStatusForm /></> },
]);