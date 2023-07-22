import React, { useState } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    
	const [age, setAge] = useState("");
	const ageChangeHandler = (event) => {
		if (event.target.value < 0) {
			return;
		}
		setAge(event.target.value);
	};
	const [username, setUsername] = useState("");
	const usernameChangeHandler = (event) => {
		if (event.target.value < 0) {
			return;
		}
		setUsername(event.target.value);
	};
	const submitFormHandler = (event) => {
		event.preventDefault();
        setUsername('');
        setAge('');
		props.onAdd({ username: username, age: +age });
	};
    
	return (
		<Card className={styles.input}>
			<form onSubmit={submitFormHandler}>
				<label>Username</label>
				<input value={username} type="text" onChange={usernameChangeHandler} />
				<label>Age (Years)</label>
				<input value={age} type="number" onChange={ageChangeHandler} />

				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
