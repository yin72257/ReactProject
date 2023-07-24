import classes from "./Input.module.css";
import React from "react";
//ForwardRef is used here to give reference to this component to access its input value.
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});
export default Input;
