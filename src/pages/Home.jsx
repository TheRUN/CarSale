import { Link } from 'react-router-dom'
import './Home.css'

function Home({ cars }) {
  const featuredCars = cars.slice(0, 6)

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Perfect Car</h1>
          <p>Quality used cars at competitive prices</p>
          <Link to="/inventory" className="cta-button">Browse Our Inventory</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Quality Vehicles</h3>
              <p>All cars thoroughly inspected and verified</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with transparent costs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Warranty</h3>
              <p>Comprehensive warranty on all vehicles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Expert Support</h3>
              <p>Professional team ready to assist you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-cars">
        <div className="container">
          <h2>Featured Vehicles</h2>
          <div className="cars-grid">
            {featuredCars.map(car => (
              <Link to={`/car/${car.id}`} key={car.id} className="car-card">
                <div className="car-image">
                  <img src={car.image} alt={`${car.make} ${car.model}`} />
                </div>
                <div className="car-info">
                  <h3>{car.year} {car.make} {car.model}</h3>
                  <div className="car-details">
                    <span>🛣️ {car.mileage.toLocaleString()} km</span>
                    <span>⚙️ {car.transmission}</span>
                    <span>⛽ {car.fuel}</span>
                  </div>
                  <div className="car-price">€{car.price.toLocaleString()}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all">
            <Link to="/inventory" className="view-all-button">View All Vehicles</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Find Your Dream Car?</h2>
          <p>Contact us today or visit our showroom</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
