// uses CartContext with useContext

import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
	const ctx = useContext(CartContext);

	const cartItemRemoveHandler = (id) => {
		ctx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		ctx.addItem({
			id: item.id,
			name: item.name,
			amount: 1,
			price: item.price,
		});
	};
	const cartItems = (
		<ul className={classes["cart-items"]}>
			{ctx.items.map((item) => (
				<CartItem
					name={item.name}
					price={item.price}
					amount={item.amount}
					onAdd={cartItemAddHandler.bind(null, item)}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);
	const hasItems = ctx.items.length > 0;
	return (
		<Modal onClose={props.hideCart}>
			{hasItems && cartItems}
			<div className={classes.total}>
				<span> Total Amount</span>
				{hasItems && <span> ${ctx.totalAmount.toFixed(2)}</span>}
                {!hasItems && <span> $0.00</span>}

			</div>
			<div className={classes.actions}>
				<button
					className={classes["button-alt"]}
					onClick={props.hideCart}
				>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={props.hideCart}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};
export default Cart;
