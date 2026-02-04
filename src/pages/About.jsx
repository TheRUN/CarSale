import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <div className="container">
          <h1>About CarSale</h1>
          <p>Your trusted partner in finding the perfect vehicle</p>
        </div>
      </div>

      <div className="container">
        <section className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, CarSale has grown to become one of Estonia's most trusted used car dealerships. 
              We pride ourselves on our commitment to quality, transparency, and customer satisfaction. 
              Our team of automotive experts carefully selects and inspects every vehicle in our inventory 
              to ensure you're getting a reliable, high-quality car.
            </p>
            <p>
              With over 8 years of experience in the automotive industry, we understand what our customers 
              need and expect. We've helped thousands of satisfied customers find their perfect vehicle, 
              and we're ready to help you too.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Us</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🔍</div>
                <h3>Thoroughly Inspected</h3>
                <p>Every vehicle undergoes a comprehensive 150-point inspection by our certified technicians.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💯</div>
                <h3>Quality Guarantee</h3>
                <p>We stand behind every car we sell with comprehensive warranties and guarantees.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Transparent Pricing</h3>
                <p>No hidden fees or surprise charges. What you see is what you get.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Expert Support</h3>
                <p>Our knowledgeable team is here to help you every step of the way.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚗</div>
                <h3>Wide Selection</h3>
                <p>From budget-friendly to luxury vehicles, we have something for everyone.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📄</div>
                <h3>Complete History</h3>
                <p>Full service history and vehicle reports available for all our cars.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: to provide quality used vehicles at fair prices while delivering 
              exceptional customer service. We believe in building long-term relationships with our 
              customers, not just making a sale. Your satisfaction and trust are our top priorities.
            </p>
          </div>

          <div className="about-section">
            <h2>Visit Our Showroom</h2>
            <p>
              We invite you to visit our modern showroom in Tallinn where you can view our extensive 
              inventory in person. Our friendly staff is ready to answer your questions and help you 
              find the perfect vehicle for your needs and budget.
            </p>
            <div className="location-info">
              <div className="info-item">
                <strong>Address:</strong> Tallinn, Estonia
              </div>
              <div className="info-item">
                <strong>Phone:</strong> +372 123 4567
              </div>
              <div className="info-item">
                <strong>Email:</strong> info@carsale.ee
              </div>
              <div className="info-item">
                <strong>Hours:</strong> Monday-Friday 9:00-18:00, Saturday 10:00-16:00
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
