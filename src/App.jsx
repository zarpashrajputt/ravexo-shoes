// Import the CSS file used to style this page.
import './App.css';
// Import the first logo image from the src folder.
import logo from './logo.jpeg';
// Import the second logo image for the carousel.
import logo2 from './logo2.jpeg';
// Import the first product shoe image.
import shoe1 from './shoe 1.jpeg';
// Import the fourth product shoe image.
import shoe4 from './shoe 4.jpeg';
// Import the fifth product shoe image.
import shoe5 from './shoe 5.jpeg';

// This function creates and displays the complete landing page.
function App() {
  // Return contains all HTML-like JSX shown in the browser.
  return (
    // Fragment lets us return multiple main sections without an extra div.
    <>
      {/* Header and navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        {/* Keeps navbar content centered */}
        <div className="container">
          {/* Create the website brand link. */}
          <a
            className="navbar-brand fw-bold d-flex align-items-center gap-2"
            href="#"
          >
            {/* Show the brand logo. */}
            <img src={logo} className="navbar-logo" alt="Ravexo.pk logo" />
            {/* Show the brand name. */}
            <span>RAVEXO.PK</span>
          </a>
          {/* Create the mobile menu button. */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Show the Bootstrap menu icon. */}
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Shows and hides the menu on small screens */}
          <div className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav ms-auto">
              {/* Add the Home link. */}
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              {/* Add the Products link. */}
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              {/* Add the About link. */}
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              {/* Add the Contact link. */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section id="home" className="py-5 hero-section">
        {/* Centers the hero content */}
        <div className="container">
          {/* Creates a row for text and images */}
          <div className="row align-items-center g-4">
            {/* Hero text column */}
            <div className="col-md-6">
              {/* Show the main hero heading. */}
              <h1 className="display-4 fw-bold">
                Step Into Your Comfort
              </h1>
              {/* Show the hero description. */}
              <p className="lead">
                Affordable sneakers and casual shoes for every style.
              </p>
              {/* Add a link to the products section. */}
              <a href="#products" className="btn btn-primary btn-lg">
                Shop Now
              </a>
            </div>
            {/* Hero image column */}
            <div className="col-md-6">
              {/* Bootstrap image slider */}
              <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                {/* Holds all carousel slides */}
                <div className="carousel-inner rounded">
                  {/* Hero picture 1: logo.jpeg */}
                  <div className="carousel-item active">
                    <img src={logo} className="d-block w-100" alt="Ravexo.pk logo" />
                  </div>
                  {/* Hero picture 2: logo2.jpeg */}
                  <div className="carousel-item">
                    <img src={logo2} className="d-block w-100" alt="Ravexo.pk footwear logo" />
                  </div>
                </div>
                {/* Create the previous carousel button. */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                {/* Create the next carousel button. */}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products section */}
      <section id="products" className="py-5">
        {/* Centers the product section */}
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          {/* Product card row */}
          <div className="row g-4">
            {/* First product column */}
            <div className="col-md-4">
              {/* First product card */}
              <div className="card h-100">
                {/* Show the first shoe image. */}
                <img
                  src={shoe4}
                  className="card-img-top"
                  alt="White, Grey, and Red Chunky Sport Sneaker"
                />
                {/* First product details */}
                <div className="card-body">
                  {/* Show the first product name. */}
                  <h5 className="card-title">White, Grey Red Chunky Sneaker</h5>
                  {/* Show the first product price and size. */}
                  <p className="card-text">
                    Price: 2500
                    <br />
                    Size: EUR 42
                  </p>
                  {/* Link to the contact section for buying. */}
                  <a href="#contact" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            {/* Second product column */}
            <div className="col-md-4">
              {/* Second product card */}
              <div className="card h-100">
                {/* Show the second shoe image. */}
                <img
                  src={shoe5}
                  className="card-img-top"
                  alt="White Mid-Top Sneaker"
                />
                {/* Second product details */}
                <div className="card-body">
                  {/* Show the second product name. */}
                  <h5 className="card-title">White Mid-Top Sneaker</h5>
                  {/* Show the second product price and size. */}
                  <p className="card-text">
                    Price: 3500
                    <br />
                    Size: EUR 43
                  </p>
                  {/* Link to the contact section for buying. */}
                  <a href="#contact" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            {/* Third product column */}
            <div className="col-md-4">
              {/* Third product card */}
              <div className="card h-100">
                {/* Show the third shoe image. */}
                <img
                  src={shoe1}
                  className="card-img-top"
                  alt="Black and White High-Top Sneaker"
                />
                {/* Third product details */}
                <div className="card-body">
                  {/* Show the third product name. */}
                  <h5 className="card-title">Black &amp; White High-Top Sneaker</h5>
                  {/* Show the third product price and size. */}
                  <p className="card-text">
                    Price: 3000
                    <br />
                    Size: EUR 40
                  </p>
                  {/* Link to the contact section for buying. */}
                  <a href="#contact" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About and contact section */}
      <section id="about" className="py-4 bg-light">
        {/* About text container */}
        <div className="container text-center">
          {/* Show the About heading. */}
          <h2>About Ravexo.pk</h2>
          {/* Show the About description. */}
          <p>Comfortable, affordable shoes made for your everyday style.</p>
        </div>
      </section>

      {/* Footer with links and contact details */}
      <footer id="contact" className="py-4 bg-dark text-white">
        {/* Footer content container */}
        <div className="container">
          {/* Footer columns row */}
          <div className="row">
            {/* Footer brand column */}
            <div className="col-md-4">
              {/* Show the footer brand name. */}
              <h5>Ravexo.pk</h5>
              {/* Show the footer slogan. */}
              <p>Step into your style.</p>
            </div>
            {/* Footer links column */}
            <div className="col-md-4">
              {/* Show the quick links heading. */}
              <h5>Quick Links</h5>
              {/* Link back to the Home section. */}
              <a href="#home" className="d-block text-white">Home</a>
              {/* Link to the Products section. */}
              <a href="#products" className="d-block text-white">Products</a>
              {/* Link to the About section. */}
              <a href="#about" className="d-block text-white">About</a>
            </div>
            {/* Footer contact column */}
            <div className="col-md-4">
              {/* Show the Contact heading. */}
              <h5>Contact</h5>
              {/* Show the email and phone number. */}
              <p>
                Email: Ravexofootwear@gmail.com
                <br />
                Phone: 03179467650
              </p>
            </div>
          </div>
          <p className="text-center mb-0">&copy; 2026 Ravexo.pk</p>
        </div>
      </footer>
    </>
  );
}

export default App;
