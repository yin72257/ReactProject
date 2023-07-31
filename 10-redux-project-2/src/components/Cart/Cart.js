import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const items = useSelector((state) => state.cart.items);
	const list = items.map((element) => {
		return (
			<CartItem
				key={element.name}
				item={{
					title: element.name,
					quantity: element.amount,
					total: element.amount * element.price,
					price: element.price,
				}}
			/>
		);
	});
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>{list}</ul>
		</Card>
	);
};

export default Cart;
