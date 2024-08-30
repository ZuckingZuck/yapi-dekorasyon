import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import categorieSlice from "./categorieSlice";
export default configureStore({
    reducer: {
        user: userSlice,
        categorie: categorieSlice
    }
})