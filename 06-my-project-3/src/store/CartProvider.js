import CartContext from "./cart-context";
import { useReducer } from "react";

//useReducer for a complex state of the cart. Dispatch function uses action.type to determine course of action. cartReducer is the Reducer and defaultCart is the default state
//This component, CartProvider, wraps the context provider of CartContext around its children. So this can replace any CartContext used in the code
//Having the reducer here means the value prop of CartContext.provider is managed by a reducer state at the top level. 

const defaultCart = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	if (action.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingCartItem = state.items[existingCartItemIndex];
		if (!existingCartItem) {
			return { items: state.items, totalAmount: state.totalAmount };
		}
		let updatedItems;

		if (existingCartItem.amount === 1) {
			updatedItems = state.items.filter((item) => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return {
			items: updatedItems,
			totalAmount: state.totalAmount - existingCartItem.price,
		};
	}
	return defaultCart;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCart
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
