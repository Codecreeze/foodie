import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './slices/categorySlice';
import mealSlice from './slices/mealSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        meals: mealSlice
    },
});

export default store;
