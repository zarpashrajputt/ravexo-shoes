// Import StrictMode to help find common React problems.
import { StrictMode } from 'react'
// Import createRoot to start the React app.
import { createRoot } from 'react-dom/client'
// Import the main App component.
import App from './App.jsx'
// Import Bootstrap CSS for layout and ready-made classes.
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript for the navbar and carousel.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Find the root div in index.html and render the App inside it.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
