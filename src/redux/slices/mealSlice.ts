import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMealsByCategory, fetchRandomMeal } from '../asyncActions/itemsThunk';

interface CategoryState {
    meals: any[];
    loading: boolean;
    error: string | null;
    favoriteMeals: any[];
    randomMeals: any[];
    isError: string | null;
    isLoading: boolean;
}

const initialState: CategoryState = {
    meals: [],
    loading: false,
    error: null,
    favoriteMeals: [],
    randomMeals: [],
    isError: null,
    isLoading: false,
};

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        likeMeal: (state, action: PayloadAction<any>) => {
            state.favoriteMeals.push(action.payload);
        },
        unlikeMeal: (state, action: PayloadAction<string>) => {
            state.favoriteMeals = state.favoriteMeals.filter(meal => meal.idMeal !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMealsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMealsByCategory.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(fetchMealsByCategory.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchRandomMeal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRandomMeal.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.randomMeals = action.payload;
            })
            .addCase(fetchRandomMeal.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    },
});

export const { likeMeal, unlikeMeal } = mealSlice.actions;

export default mealSlice.reducer;
