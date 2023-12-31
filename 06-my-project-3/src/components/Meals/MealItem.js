import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
	const addToCartHandler = (amount) => {
		ctx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};
	const ctx = useContext(CartContext);
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>${props.price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
			</div>
		</li>
	);
};

export default MealItem;
