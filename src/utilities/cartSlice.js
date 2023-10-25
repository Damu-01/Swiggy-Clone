import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: []
    },
    reducers: {
        addItem: (state, action) => { state.cartItem.push(action.payload) },
        clearCart: (state) => { state.cartItem = [] }
    }
})
console.log("cartSlice", cartSlice);

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;