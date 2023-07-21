const TableRow = (props) => {
	return (
		<tbody>
			<tr>
				<td>{props.year}</td>
				<td>${props.savings}</td>
				<td>${props.yearlyInterest}</td>
				<td>${props.totalInterest}</td>
				<td>${props.investedCapital}</td>
			</tr>
		</tbody>
	);
};

export default TableRow;
