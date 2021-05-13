import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../product/slice/productSlice';
import userReducer from '../guards/userSlice';
import productsReducer from '../product/slice/productsSlice';
import categoriesReducer from '../category/categoriesSlice';

export default configureStore({
    reducer: {
        productReducer,
        userReducer,
        productsReducer,
        categoriesReducer,
    }
})