import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].amount += 1;
                state.carts[itemIndex].quantity -= 1;

                // Update localStorage
                const cartData = JSON.parse(localStorage.getItem("cart"));
                cartData[itemIndex].amount += 1;
                localStorage.setItem("cart", JSON.stringify(cartData));
            } else {
                action.payload.amount = 1;
                state.carts.push({ ...action.payload, amount: 1 });

                // Update localStorage
                localStorage.setItem("cart", JSON.stringify(state.carts));
            }
        },
        deleteFromCart: (state, action) => {
            state.carts = state.carts.filter((item) => item._id !== action.payload);

            // Update localStorage
            const cartData = JSON.parse(localStorage.getItem("cart"));
            const itemIndexDelete = cartData.findIndex((item) => item._id === action.payload);
            cartData.splice(itemIndexDelete, 1);
            localStorage.setItem("cart", JSON.stringify(cartData));
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item._id === action.payload._id);
            if (state.carts[itemIndex].amount > 1) {
                state.carts[itemIndex].amount -= 1;

                // Update localStorage
                const cartData = JSON.parse(localStorage.getItem("cart"));
                cartData[itemIndex].amount -= 1;
                localStorage.setItem("cart", JSON.stringify(cartData));
            } else if (state.carts[itemIndex].amount === 1) {
                state.carts = state.carts.filter((item) => item._id !== action.payload._id);
            }
        },
        deleteAll: (state) => {
            state.carts = [];
            localStorage.removeItem("cart");
        },
    },
});

export default cartSlice;