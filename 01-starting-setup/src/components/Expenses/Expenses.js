import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState("2020");
	const filterYearChangeHandler = (year) => {
		setFilterYear(year);
		console.log(year);
	};

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === filterYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onFilterYearChange={filterYearChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList expenses={filteredExpenses}/>
			</Card>
		</div>
	);
};

export default Expenses;
