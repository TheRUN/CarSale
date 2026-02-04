import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-contact">
            <span>📞 +372 123 4567</span>
            <span>✉️ info@carsale.ee</span>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <h1>🚗 CarSale</h1>
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin" className="admin-link">Admin</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
