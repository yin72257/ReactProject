import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState("2020");
	const filterYearChangeHandler = (year) => {
		setFilterYear(year);
		console.log(year);
	};
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onFilterYearChange={filterYearChangeHandler}
				/>
				{props.expenses.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
