import React from 'react'
import Todo from './Todo'
import { Grid, Header } from 'semantic-ui-react'

const TodoList = ({ todos, changeTodo, deleteTodo }) => {
	if (todos && todos.length) {
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
		return (
			<Header as="h1" textAlign="center">
				You don't have any todos.
			</Header>
		)
	}
}

export default TodoList
