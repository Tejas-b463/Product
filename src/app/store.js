import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../products/productSlice';
import cartReducer from './cartSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('products');
    return serializedState ? { products: JSON.parse(serializedState) } : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.products);
    localStorage.setItem('products', serializedState);
  } catch (err) {
    console.error('Error saving to localStorage', err);
  }
};

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export { store };