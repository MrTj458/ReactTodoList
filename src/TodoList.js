import React from 'react'
import Todo from './Todo'
import { Grid } from 'semantic-ui-react'

const TodoList = ({ todos, changeTodo, deleteTodo }) => {
	if (todos.length > 0) {
		return (
			<Grid>
				{todos.map((todo, index) => {
					return (
						<Todo
							key={index}
							todo={todo}
							changeTodo={changeTodo}
							deleteTodo={deleteTodo}
						/>
					)
				})}
			</Grid>
		)
	} else {
		return <h1>You don't have any todos.</h1>
	}
}

export default TodoList
