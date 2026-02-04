import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory'
import CarDetail from './pages/CarDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import { initialCars } from './data/cars'
import './App.css'

function App() {
  const [cars, setCars] = useState(initialCars)

  const addCar = (newCar) => {
    const carWithId = {
      ...newCar,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
      status: 'available'
    }
    setCars([...cars, carWithId])
  }

  const updateCar = (id, updatedCar) => {
    setCars(cars.map(car => car.id === id ? { ...car, ...updatedCar } : car))
  }

  const deleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id))
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home cars={cars} />} />
            <Route path="/inventory" element={<Inventory cars={cars} />} />
            <Route path="/car/:id" element={<CarDetail cars={cars} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin" 
              element={
                <Admin 
                  cars={cars} 
                  onAdd={addCar}
                  onUpdate={updateCar}
                  onDelete={deleteCar}
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
