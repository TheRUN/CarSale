import { useParams, Link } from 'react-router-dom'
import './CarDetail.css'

function CarDetail({ cars }) {
  const { id } = useParams()
  const car = cars.find(c => c.id === parseInt(id))

  if (!car) {
    return (
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Car not found</h2>
        <Link to="/inventory">Back to Inventory</Link>
      </div>
    )
  }

  return (
    <div className="car-detail">
      <div className="container">
        <Link to="/inventory" className="back-link">← Back to Inventory</Link>
        
        <div className="detail-grid">
          <div className="detail-images">
            <img src={car.image} alt={`${car.make} ${car.model}`} className="main-image" />
          </div>

          <div className="detail-info">
            <h1>{car.year} {car.make} {car.model}</h1>
            <div className="price-tag">€{car.price.toLocaleString()}</div>
            
            <div className="quick-specs">
              <div className="spec-item">
                <span className="spec-label">Mileage</span>
                <span className="spec-value">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Fuel Type</span>
                <span className="spec-value">{car.fuel}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Transmission</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Color</span>
                <span className="spec-value">{car.color}</span>
              </div>
            </div>

            <div className="contact-section">
              <Link to="/contact" className="contact-button">Contact Us About This Car</Link>
              <a href="tel:+3721234567" className="phone-button">📞 +372 123 4567</a>
            </div>
          </div>
        </div>

        <div className="detail-sections">
          <section className="description-section">
            <h2>Description</h2>
            <p>{car.description}</p>
          </section>

          <section className="features-section">
            <h2>Features & Equipment</h2>
            <ul className="features-list">
              {car.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          </section>

          <section className="specifications-section">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-row">
                <span className="spec-label">Make:</span>
                <span className="spec-value">{car.make}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Model:</span>
                <span className="spec-value">{car.model}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Year:</span>
                <span className="spec-value">{car.year}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Mileage:</span>
                <span className="spec-value">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Fuel Type:</span>
                <span className="spec-value">{car.fuel}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Transmission:</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Color:</span>
                <span className="spec-value">{car.color}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Status:</span>
                <span className="spec-value status-available">{car.status}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CarDetail
