import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories: any = createAsyncThunk(
    'categories/fetchCategories',
    async (state, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            return response?.data?.categories;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchMealsByCategory: any = createAsyncThunk(
    'meals/fetchMealsByCategory',
    async (category: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            return response.data.meals;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchRandomMeal: any = createAsyncThunk(
    'meals/fetchRandomMeal',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            return response.data.meals[0];
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);