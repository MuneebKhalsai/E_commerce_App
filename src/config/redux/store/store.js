import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/config/reducers/cartslice";
const store = configureStore({
    reducer : {
        cart : cartSlice
    }
});

export default store