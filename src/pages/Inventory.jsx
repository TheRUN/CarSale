import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import './Inventory.css'

function Inventory({ cars }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    make: '',
    fuel: '',
    transmission: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: ''
  })

  const makes = [...new Set(cars.map(car => car.make))].sort()
  const fuelTypes = [...new Set(cars.map(car => car.fuel))].sort()
  const transmissionTypes = [...new Set(cars.map(car => car.transmission))].sort()

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = searchTerm === '' || 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesMake = filters.make === '' || car.make === filters.make
      const matchesFuel = filters.fuel === '' || car.fuel === filters.fuel
      const matchesTransmission = filters.transmission === '' || car.transmission === filters.transmission
      const matchesMinPrice = filters.minPrice === '' || car.price >= Number(filters.minPrice)
      const matchesMaxPrice = filters.maxPrice === '' || car.price <= Number(filters.maxPrice)
      const matchesMinYear = filters.minYear === '' || car.year >= Number(filters.minYear)
      const matchesMaxYear = filters.maxYear === '' || car.year <= Number(filters.maxYear)

      return matchesSearch && matchesMake && matchesFuel && matchesTransmission && 
             matchesMinPrice && matchesMaxPrice && matchesMinYear && matchesMaxYear
    })
  }, [cars, searchTerm, filters])

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const clearFilters = () => {
    setSearchTerm('')
    setFilters({
      make: '',
      fuel: '',
      transmission: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: ''
    })
  }

  return (
    <div className="inventory">
      <div className="inventory-header">
        <div className="container">
          <h1>Our Inventory</h1>
          <p>Browse our selection of {cars.length} quality vehicles</p>
        </div>
      </div>

      <div className="container">
        <div className="inventory-content">
          <aside className="filters">
            <h2>Filter Results</h2>
            
            <div className="filter-group">
              <label>Search</label>
              <input
                type="text"
                placeholder="Search by make or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Make</label>
              <select value={filters.make} onChange={(e) => handleFilterChange('make', e.target.value)}>
                <option value="">All Makes</option>
                {makes.map(make => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Fuel Type</label>
              <select value={filters.fuel} onChange={(e) => handleFilterChange('fuel', e.target.value)}>
                <option value="">All Types</option>
                {fuelTypes.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Transmission</label>
              <select value={filters.transmission} onChange={(e) => handleFilterChange('transmission', e.target.value)}>
                <option value="">All Types</option>
                {transmissionTypes.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <div className="range-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Year Range</label>
              <div className="range-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minYear}
                  onChange={(e) => handleFilterChange('minYear', e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxYear}
                  onChange={(e) => handleFilterChange('maxYear', e.target.value)}
                />
              </div>
            </div>

            <button onClick={clearFilters} className="clear-button">Clear All Filters</button>
          </aside>

          <div className="results">
            <div className="results-header">
              <h2>Showing {filteredCars.length} vehicles</h2>
            </div>

            <div className="cars-grid">
              {filteredCars.map(car => (
                <Link to={`/car/${car.id}`} key={car.id} className="car-card">
                  <div className="car-image">
                    <img src={car.image} alt={`${car.make} ${car.model}`} />
                  </div>
                  <div className="car-info">
                    <h3>{car.year} {car.make} {car.model}</h3>
                    <div className="car-specs">
                      <span>🛣️ {car.mileage.toLocaleString()} km</span>
                      <span>⚙️ {car.transmission}</span>
                      <span>⛽ {car.fuel}</span>
                      <span>🎨 {car.color}</span>
                    </div>
                    <div className="car-price">€{car.price.toLocaleString()}</div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="no-results">
                <h3>No vehicles found</h3>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
