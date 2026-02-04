# CarSale - React Car Sales Website

A complete, modern React-based car sales business website built with Vite. This application provides a full-featured platform for browsing and managing a car inventory.

## Features

### Public Pages
- **Home Page**: Hero section, featured vehicles showcase, company benefits, and call-to-action sections
- **Inventory Page**: Browse all vehicles with advanced filtering options
  - Search by make or model
  - Filter by make, fuel type, transmission
  - Filter by price range and year range
  - Real-time client-side filtering
- **Car Detail Page**: Detailed view of individual vehicles with specifications, features, and contact options
- **About Page**: Company information, benefits, and contact details
- **Contact Page**: Contact form for customer inquiries

### Admin Panel
- View all inventory in a table format
- Add new vehicles with a comprehensive form
- Edit existing vehicle information
- Delete vehicles from inventory
- All operations work with local React state (no backend required)

## Tech Stack

- **React 19.2.0** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **Modern CSS** - Responsive styling with CSS modules

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheRUN/CarSale.git
cd CarSale
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
CarSale/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Inventory.jsx
│   │   ├── Inventory.css
│   │   ├── CarDetail.jsx
│   │   ├── CarDetail.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Admin.jsx
│   │   └── Admin.css
│   ├── data/             # Sample data
│   │   └── cars.js
│   ├── App.jsx           # Main app component
│   ├── App.css
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Sample Data

The application includes 12 sample cars with detailed information:
- Various makes: BMW, Mercedes-Benz, Audi, Toyota, Volkswagen, Tesla, Honda, Ford, Volvo, Mazda, Porsche, Lexus
- Different fuel types: Petrol, Diesel, Electric, Hybrid
- Transmission types: Automatic, Manual
- Price range: €25,000 - €78,000
- Realistic mileage and year data

## Features Showcase

### Responsive Design
- Mobile-friendly navigation
- Adaptive layouts for all screen sizes
- Touch-friendly interface

### Search & Filter
- Real-time search functionality
- Multiple filter options
- Clear filters button
- Shows result count

### Admin Panel
- Intuitive interface for managing inventory
- Modal form for adding/editing vehicles
- Confirmation dialogs for deletions
- Image preview in table view

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please contact:
- Email: info@carsale.ee
- Phone: +372 123 4567

