import { Link } from 'react-router-dom';

function RiderMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#063b3b' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Ravexo</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/rider-login">Rider Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/delivery-status">Delivery Status</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default RiderMenu;