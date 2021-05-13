import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllCategories} from '../api/categoryApi';

export const fetchAllCategories = createAsyncThunk('/category/read', async () => {
    const categories = await getAllCategories();
    return categories;
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
    },
    reducers: {
        setActive: (state, action) => {
            const index = state.categories.map(el => el._id).indexOf(action.payload.id);
            //console.log(index, state.categories[index]);
            state.categories[index].isActive = !state.categories[index].isActive;
        }
    },

    extraReducers: {
        [fetchAllCategories.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchAllCategories.fulfilled]: (state, action) => {
            const categories = [...action.payload.map(el => ({...el, isActive: true}))];
            state.categories = categories;
            state.status = 'success';
        },
        
        [fetchAllCategories.rejected]: (state, action) => {
            state.status = 'failed';
        },
    }
});

export const {setActive} = categoriesSlice.actions;

export default categoriesSlice.reducer;