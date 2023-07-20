import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

    const addExpenseHandler = () => setShowForm(true);
    const hideFormHandler = () => setShowForm(false);
	return (
		<div className="new-expense">
			{showForm ? (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hide={hideFormHandler} />
			) : (
                <button type="button" onClick={addExpenseHandler}>Add New Expense</button>
			)}
		</div>
	);
};
export default NewExpense;
