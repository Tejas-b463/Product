import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border shadow-sm p-4 space-y-2 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="inline-block text-sm bg-yellow-100 px-2 py-0.5 rounded-full text-gray-700">
                {item.category}
              </span>
              <p className="text-gray-800 font-semibold">${item.cost}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;