import { ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import { addToCart } from '../app/cartSlice';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartCount = useSelector((state) => state.cart.items.length);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Add product to cart</h2>
        <span className="flex items-center text-sm text-gray-600">
          <ShoppingCart className="w-4 h-4 mr-1" /> {cartCount} Items in cart
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-2xl border shadow-sm p-4 space-y-2 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="inline-block text-sm bg-yellow-100 px-2 py-0.5 rounded-full text-gray-700">
              {product.category}
            </span>
           <div className='flex items-center justify-between'>
             <p className="text-gray-800 font-semibold">${product.cost}</p>
            <button
              className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 text-sm rounded"
              onClick={() => handleAdd(product)}
            >
              Add <ShoppingCart size={16} />
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;