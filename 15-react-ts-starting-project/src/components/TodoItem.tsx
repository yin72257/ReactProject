import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{
	todo: Todo;
	removeTodoHandler: (id: string) => void;
}> = (props) => {
	return (
		<li
			className={classes.item}
			onClick={props.removeTodoHandler.bind(null, props.todo.id)}
		>
			{props.todo.text}
		</li>
	);
};

export default TodoItem;
