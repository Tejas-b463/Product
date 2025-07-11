import { useSelector } from 'react-redux';

const ProductTable = () => {
  const products = useSelector((state) => state.products.items);

  return (
    <table className="w-full mt-4 border">
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
        {products.map((product, index) => (
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
  );
};

export default ProductTable;