import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import ErrorModal from "./components/ErrorModal";

function App() {
	const [userList, setUserList] = useState([]);
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const addUserList = (user) => {
		if (!user.username) {
			setErrorMessage("Please enter a valid username.");
			setShowError(false);
			return;
		}
		if (!user.age || user.age < 0) {
			setErrorMessage("Please enter a valid age (> 0).");
			setShowError(false);
			return;
		}
		setUserList((prevList) => [...prevList, user]);
	};
	const hideErrorHandler = () => setShowError(false);

	return (
		<div>
			<AddUser onAdd={addUserList}/>
			<UserList list={userList} />
			{showError && (
				<ErrorModal
					title="Invalid input"
					message={errorMessage}
					hide={hideErrorHandler}
				/>
			)}
		</div>
	);
}

export default App;
