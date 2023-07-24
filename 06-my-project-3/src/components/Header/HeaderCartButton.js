// useEffect that changes the css of the button everytime items change. setTimeout to reverse it and cleartimeout to reset.

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
	const [buttonBump, setButtonBump] = useState(false);
	const ctx = useContext(CartContext);
	const { items } = ctx;
	const numberOfCartItems = ctx.items.reduce(
		(curNum, item) => curNum + item.amount,
		0
	);
	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setButtonBump(true);

		const timer = setTimeout(() => {
			setButtonBump(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;
	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};
export default HeaderCartButton;
