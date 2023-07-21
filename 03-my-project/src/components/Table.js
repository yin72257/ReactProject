import TableRow from "./TableRow";
import styles from "./Table.module.css";

const Table = (props) => {
	return (
		<table className={styles.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			{props.data.map((element) => {
				return (
					<TableRow
						key={element.year}
						year={element.year}
						savings={element.savingsEndOfYear}
						yearlyInterest={element.yearlyInterest}
						totalInterest={element.totalInterest}
						investedCapital={element.investedCapital}
					/>
				);
			})}
		</table>
	);
};

export default Table;
