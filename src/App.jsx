import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import ProductGrid from './components/ProductGrid';
import CartPage from './components/CartPage'

const App = () => (
  <Router>
    <Header />
    <main className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
         <Route path="/add-products" element={<ProductGrid/>} />
          <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </main>
  </Router>
);

export default App;
