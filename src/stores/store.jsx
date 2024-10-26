// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlice.reducer
    },
});

export default store;