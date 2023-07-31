import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const dispatch = useDispatch();
	const toggleCartHandler = () => {
		dispatch(cartActions.toggleCart());
	};
	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalAmount}</span>
		</button>
	);
};

export default CartButton;
