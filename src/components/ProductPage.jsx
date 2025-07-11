import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search } from 'lucide-react';

const ProductPage = () => {
  const products = useSelector((state) => state.products.items);
  const [search, setSearch] = useState('');

  const filtered = products.filter(
    (pro) =>
      pro.name.toLowerCase().includes(search.toLowerCase()) ||
      pro.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <div className="relative max-w-md mb-4">
        <input
          type="text"
          placeholder="Search product by name or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded pl-10 pr-4 py-2"
        />
        <Search className="absolute left-2 top-2.5 text-gray-400 w-5 h-5" />
      </div>
      <div className="text-right text-sm text-gray-600 mb-2">{filtered.length} products</div>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No.</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Expiry date</th>
            <th className="border p-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((product, index) => (
            <tr key={index}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">{product.expiryDate}</td>
              <td className="border p-2">${product.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;