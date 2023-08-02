import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					key={item.id}
					todo={item}
					removeTodoHandler={todosCtx.removeTodo}
				/>
			))}
		</ul>
	);
};

export default Todos;
