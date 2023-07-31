import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();
  
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const increaseHandler = (amount) => {
		dispatch(counterActions.increase(amount));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increaseHandler.bind(null, 5)}>
					Increase by 5
				</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
