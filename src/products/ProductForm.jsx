import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productSlice';
import { toast } from 'react-hot-toast';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    category: '',
    expiryDate: '',
    cost: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const isFutureDate = (date) => new Date(date) > new Date();

  const handleSubmit = () => {
    let valid = true;
    const newErrors = {};

    if (!/^[a-zA-Z0-9 ]+$/.test(form.name)) {
      newErrors.name = 'Invalid name';
      valid = false;
    }
    if (!['Finished', 'Semi-finished', 'Raw material'].includes(form.category)) {
      newErrors.category = 'Select a valid category';
      valid = false;
    }
    if (!isFutureDate(form.expiryDate)) {
      newErrors.expiryDate = 'Expiry must be a future date';
      valid = false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(form.cost)) {
      newErrors.cost = 'Cost must be a number with up to 2 decimal places';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    dispatch(addProduct(form));
    toast.success('Product added successfully');
    setForm({ name: '', category: '', expiryDate: '', cost: '' });
    setErrors({});
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Add new product</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <select name="category" value={form.category} onChange={handleChange} className="border p-2 w-full">
            <option value="">Select Category</option>
            <option value="Finished">Finished</option>
            <option value="Semi-finished">Semi-finished</option>
            <option value="Raw material">Raw material</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
        <div>
          <input type="date" name="expiryDate" value={form.expiryDate} onChange={handleChange} className="border p-2 w-full" />
          {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
        </div>
        <div>
          <input name="cost" value={form.cost} onChange={handleChange} placeholder="Cost ($)" className="border p-2 w-full" />
          {errors.cost && <p className="text-red-500 text-sm mt-1">{errors.cost}</p>}
        </div>
      </div>
      <div className="space-x-2">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={() => { setForm({ name: '', category: '', expiryDate: '', cost: '' }); setErrors({}); }} className="bg-gray-300 px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
};

export default ProductForm;