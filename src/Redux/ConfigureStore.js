import { configureStore } from '@reduxjs/toolkit';
import crypto from './Slice/CryptoSlice';

const Store = configureStore({
  reducer: {
    cryptoReducer: crypto,
  },
});

export default Store;
