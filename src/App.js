import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Header, Container, Divider } from 'semantic-ui-react'

class App extends Component {
	state = {
		todos: [
			'Learn JS',
			'Learn React',
			'Learn Redux',
			'Learn Express',
			'Learn MongoDB',
			'Profit',
		],
	}

	addTodo = (todo) => {
		this.setState({ todos: [...this.state.todos, todo] })
	}

	changeTodo = (firstTodo, newTodo) => {
		let { todos } = this.state
		const index = todos.indexOf(firstTodo)
		todos[index] = newTodo
		this.setState({ todos })
	}

	deleteTodo = (todo) => {
		let { todos } = this.state
		const index = todos.indexOf(todo)
		todos.splice(index, 1)
		this.setState({ todos })
	}

	render() {
		return (
			<Container>
				<Divider hidden />
				<Header as="h1" textAlign="center">
					Todo List
				</Header>
				<Divider hidden />
				<TodoForm addTodo={this.addTodo} />
				<Divider hidden />
				<TodoList
					todos={this.state.todos}
					changeTodo={this.changeTodo}
					deleteTodo={this.deleteTodo}
				/>
			</Container>
		)
	}
}

export default App
