import { createSlice } from "@reduxjs/toolkit";

const categorieSlice = createSlice({
    name: "categorie",
    initialState: {
        categories: null,
    },
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})



export const { getCategories } = categorieSlice.actions
export default categorieSlice.reducer