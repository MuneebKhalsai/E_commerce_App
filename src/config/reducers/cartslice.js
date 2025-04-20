import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart: [],
    },
    reducers : {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
          },
          increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
              item.quantity += 1;
            }
          },
          decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item.quantity > 1) {
              item.quantity -= 1;
            } else {
              state.cart = state.cart.filter(i => i.id !== action.payload.id);
            }
          },
        removeFromCart : (state,action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
    }
})

export const {addToCart ,increaseQuantity, decreaseQuantity, removeFromCart} = cartSlice.actions

export default cartSlice.reducer