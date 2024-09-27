import { configureStore } from "@reduxjs/toolkit";
import categorieSlice from "./categorieSlice";
export default configureStore({
    reducer: {
        categories: categorieSlice,
    }
})