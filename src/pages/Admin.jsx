import { useState } from 'react'
import './Admin.css'

function Admin({ cars, onAdd, onUpdate, onDelete }) {
  const [showForm, setShowForm] = useState(false)
  const [editingCar, setEditingCar] = useState(null)
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    mileage: '',
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: '',
    image: '',
    description: '',
    features: ''
  })

  const resetForm = () => {
    setFormData({
      make: '',
      model: '',
      year: new Date().getFullYear(),
      price: '',
      mileage: '',
      fuel: 'Petrol',
      transmission: 'Automatic',
      color: '',
      image: '',
      description: '',
      features: ''
    })
    setEditingCar(null)
    setShowForm(false)
  }

  const handleEdit = (car) => {
    setEditingCar(car)
    setFormData({
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price,
      mileage: car.mileage,
      fuel: car.fuel,
      transmission: car.transmission,
      color: car.color,
      image: car.image,
      description: car.description,
      features: car.features.join(', ')
    })
    setShowForm(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const carData = {
      ...formData,
      year: parseInt(formData.year),
      price: parseInt(formData.price),
      mileage: parseInt(formData.mileage),
      features: formData.features.split(',').map(f => f.trim()).filter(f => f)
    }

    if (editingCar) {
      onUpdate(editingCar.id, carData)
    } else {
      onAdd(carData)
    }
    
    resetForm()
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      onDelete(id)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <div className="container">
          <h1>Admin Panel</h1>
          <p>Manage your car inventory</p>
        </div>
      </div>

      <div className="container admin-content">
        <div className="admin-actions">
          <button 
            className="add-button" 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add New Car'}
          </button>
        </div>

        {showForm && (
          <div className="form-modal">
            <div className="form-container">
              <h2>{editingCar ? 'Edit Car' : 'Add New Car'}</h2>
              <form onSubmit={handleSubmit} className="car-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Make *</label>
                    <input
                      type="text"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Model *</label>
                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Year *</label>
                    <input
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      min="1900"
                      max={new Date().getFullYear() + 1}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Price (€) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Mileage (km) *</label>
                    <input
                      type="number"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Color *</label>
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Fuel Type *</label>
                    <select name="fuel" value={formData.fuel} onChange={handleChange} required>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Transmission *</label>
                    <select name="transmission" value={formData.transmission} onChange={handleChange} required>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Image URL *</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Features (comma separated)</label>
                  <input
                    type="text"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="Leather Seats, Navigation, etc."
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    {editingCar ? 'Update Car' : 'Add Car'}
                  </button>
                  <button type="button" onClick={resetForm} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="cars-table">
          <h2>Current Inventory ({cars.length} cars)</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Vehicle</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>Mileage</th>
                  <th>Fuel</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map(car => (
                  <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>
                      <img src={car.image} alt={car.model} className="table-image" />
                    </td>
                    <td>
                      <strong>{car.make} {car.model}</strong>
                    </td>
                    <td>{car.year}</td>
                    <td>€{car.price.toLocaleString()}</td>
                    <td>{car.mileage.toLocaleString()} km</td>
                    <td>{car.fuel}</td>
                    <td>
                      <span className="status-badge">{car.status}</span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button onClick={() => handleEdit(car)} className="edit-btn">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(car.id)} className="delete-btn">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
