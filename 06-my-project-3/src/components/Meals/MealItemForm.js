import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

//useRef is used here
//set a const to useRef. This const is passed forward to the input component which uses it.
//the value can be accessed witrh variable.current in this component.

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
	const amountInputRef = useRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
            setAmountValid(false);
			return;
		}
        props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>

			<button>+Add</button>
            {!amountValid && <p>Please enter valid number</p> }
		</form>
	);
};

export default MealItemForm;
