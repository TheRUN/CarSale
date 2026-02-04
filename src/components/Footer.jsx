import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About CarSale</h3>
            <p>Your trusted partner for quality used cars. We offer a wide selection of vehicles with transparent pricing and excellent customer service.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/inventory">Browse Inventory</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📍 Tallinn, Estonia</p>
            <p>📞 +372 123 4567</p>
            <p>✉️ info@carsale.ee</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CarSale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
