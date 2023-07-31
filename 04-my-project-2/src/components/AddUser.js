import React, { useState, useRef } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const submitFormHandler = (event) => {
		event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
		props.onAdd({ username: enteredName, age: +enteredAge });
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={submitFormHandler}>
				<label>Username</label>
				<input
					type="text"
					ref={nameInputRef}
				/>
				<label>Age (Years)</label>
				<input
					type="number"
					ref={ageInputRef}
				/>

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
