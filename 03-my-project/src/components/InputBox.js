const InputBox = (props) => {
	const onChangeHandler = (event) => {
		props.onChangeHandler(event.target.value);
	};
	return (
		<p>
			<label htmlFor={props.id}>{props.labelText}</label>
			<input type="number" onChange={onChangeHandler} value={props.value} id={props.id} />
		</p>
	);
};

export default InputBox;
