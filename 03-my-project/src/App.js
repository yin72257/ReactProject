import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Table from "./components/Table";

function App() {
	const [yearlyData, setYearlyData] = useState([]);

	const submitFormHandler = (input) => {
		calculateHandler(input);
	};

	const calculateHandler = (userInput) => {
		if (!userInput) {
			setYearlyData([]);
			return;
		}
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...

		const tempYearlyData = [];

		let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput["expected-return"] / 100;
		const duration = +userInput["duration"];
		let totalInterest = 0;
		let investedCapital = currentSavings;

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			totalInterest += yearlyInterest;
			investedCapital += yearlyContribution;
			tempYearlyData.push({
				year: i + 1,
				savingsEndOfYear: currentSavings.toFixed(2),
				yearlyInterest: yearlyInterest.toFixed(2),
				totalInterest: totalInterest.toFixed(2),
				investedCapital: investedCapital.toFixed(2),
			});
		}
		setYearlyData(tempYearlyData);

		// do something with yearlyData ...
	};

	return (
		<div>
			<Header />

			<InputForm onSubmit={submitFormHandler} />

			{/* Todo: Show below table conditionally (only once result data is available) */}
			{/* Show fallback text if no data is available */}

			<Table data={yearlyData} />
		</div>
	);
}

export default App;
