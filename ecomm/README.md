# ECommerce Store

A modern, responsive e-commerce website built with React, Bootstrap, and Vite. This project features a complete online shopping experience with responsive design optimized for all devices.

## Features

### 🛒 **Complete E-commerce Functionality**
- Product catalog with search and filtering
- Shopping cart with quantity management
- Product categories and featured items
- Responsive design for all devices
- User authentication (Login/Register)
- Contact form and customer support

### 📱 **Responsive Design**
- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Perfect layout for tablets
- **Desktop Ready**: Full-featured desktop experience
- **Cross-browser Compatible**: Works on all modern browsers

### 🎨 **Modern UI/UX**
- Bootstrap 5.3.2 for styling
- Font Awesome icons
- Smooth animations and transitions
- Hover effects and interactive elements
- Clean, professional design

### 🔧 **Technical Features**
- React 19.1.0 with hooks
- React Router for navigation
- React Bootstrap components
- Vite for fast development
- ESLint for code quality
- Responsive grid system

## Pages & Components

### Pages
- **Home**: Hero carousel, featured products, categories
- **Products**: Product listing with search and filters
- **Categories**: Product categories with descriptions
- **Cart**: Shopping cart with item management
- **Login**: User authentication with social login options
- **Contact**: Contact form and business information
- **About**: Company information and team

### Components
- **Header**: Navigation with responsive menu
- **Footer**: Links, social media, and company info
- **ProductCard**: Reusable product display component

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecomm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Responsive Breakpoints

- **Extra Small (xs)**: < 576px (Mobile phones)
- **Small (sm)**: ≥ 576px (Large phones)
- **Medium (md)**: ≥ 768px (Tablets)
- **Large (lg)**: ≥ 992px (Desktops)
- **Extra Large (xl)**: ≥ 1200px (Large desktops)
- **Extra Extra Large (xxl)**: ≥ 1400px (Larger desktops)

## File Structure

```
ecomm/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Categories.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Dependencies

### Production Dependencies
- **react**: ^19.1.0 - Core React library
- **react-dom**: ^19.1.0 - React DOM rendering
- **react-router-dom**: ^7.7.1 - Client-side routing
- **bootstrap**: ^5.3.2 - CSS framework
- **react-bootstrap**: ^2.9.1 - Bootstrap components for React

### Development Dependencies
- **vite**: ^7.0.4 - Build tool and dev server
- **eslint**: ^9.30.1 - Code linting
- **@vitejs/plugin-react**: ^4.6.0 - React plugin for Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Fast Loading**: Vite for lightning-fast development
- **Optimized Images**: Placeholder images with proper sizing
- **Lazy Loading**: Components load as needed
- **Responsive Images**: Different sizes for different devices
- **CSS Optimization**: Bootstrap CSS loaded once
- **Icon Optimization**: Font Awesome loaded from CDN

## Accessibility Features

- **Semantic HTML**: Proper HTML5 semantic elements
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Alt Text**: Images have descriptive alt text
- **Color Contrast**: WCAG compliant color schemes

## Customization

### Colors
The color scheme can be customized in `src/App.css` and `src/index.css`. Default Bootstrap colors are used with custom gradients.

### Typography
Font family and sizes are defined in `src/index.css` with responsive typography scales.

### Layout
Grid system and spacing can be adjusted using Bootstrap utility classes.

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for React
- Consistent component structure
- Responsive design patterns
- Modern React hooks usage

## Future Enhancements

- [ ] Payment integration
- [ ] User accounts and profiles
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Admin dashboard
- [ ] Real database integration
- [ ] SEO optimization
- [ ] PWA features
- [ ] Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@ecommercestore.com or visit our contact page.

---

**Built with ❤️ using React, Bootstrap, and Vite**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
