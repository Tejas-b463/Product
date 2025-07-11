import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm bg-white">
      <Link to="/" className="text-2xl font-bold text-gray-800">LOGO</Link>
      <nav className="flex items-center space-x-6 text-gray-700">
        <Link to="/" className="">Home</Link>
        <Link to="/products" className="">Products</Link>
        <Link to="/add-products" className="">Add Products</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
