import { useEffect, useCallback, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = (props) => {
	const [meals, setMeals] = useState([]);
	const [mealsLoading, setMealsLoading] = useState(false);
	const [error, setError] = useState("");
	const fetchMealsHandler = useCallback(async () => {
		try {
			setError("");
			setMealsLoading(true);
			const response = await fetch(
				"https://react-http-65fc9-default-rtdb.firebaseio.com/meals.json"
			);
			if (!response.ok) {
				throw new Error("something wrong");
			}
			const data = await response.json();

			const loadJson = [];
			for (const key in data) {
				loadJson.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}
			setMeals(loadJson);
			setMealsLoading(false);
		} catch (error) {
			setError(error.message);
		}
	}, []);
	useEffect(() => {
		fetchMealsHandler();
	}, [fetchMealsHandler]);
	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price}
			></MealItem>
		);
	});
	return (
		<section className={classes.meals}>
			<Card>
				{error && <p>{error}</p>}
				{!error && mealsLoading && <p>Loading list...</p>}
				{!error && <ul>{mealsList}</ul>}
			</Card>
		</section>
	);
};
export default AvailableMeals;
