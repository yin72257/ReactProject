import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, show: false };

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const name = action.payload.name;
			const amount = action.payload.amount;
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.name === name
			);
			const existingCartItem = state.items[existingCartItemIndex];
			if (existingCartItem) {
				state.items[existingCartItemIndex].amount += amount;
			} else {
				state.items = state.items.concat(action.payload);
			}
			state.totalAmount++;
		},
		removeFromCart: (state, action) => {
			const name = action.payload.name;
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.name === name
			);
			if (state.items[existingCartItemIndex].amount === 1) {
				state.items = state.items.filter((item) => item.name !== name);
			} else {
				state.items[existingCartItemIndex].amount--;
			}
			state.totalAmount--;
		},
		toggleCart: (state) => {
			state.show = !state.show;
		},
	},
});


export const cartActions = cartSlice.actions;



export default cartSlice.reducer;
