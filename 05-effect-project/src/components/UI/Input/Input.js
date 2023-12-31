import classes from "./Input.module.css";
const Input = (props) => {
	return (
		<div
			className={`${classes.control} ${
				props.isValid === false ? classes.invalid : " "
			}`}
		>
			<label htmlFor={props.id}>{props.children}</label>
			<input
				type={props.types}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
				onBlur={props.onBlur}
			/>
		</div>
	);
};

export default Input;
