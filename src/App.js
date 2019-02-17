import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Header, Container, Divider } from 'semantic-ui-react'

class App extends Component {
	state = { todos: [] }

	componentDidMount() {
		if (localStorage.hasOwnProperty('todos')) {
			const json = localStorage.getItem('todos')
			const todos = JSON.parse(json)
			this.setState({ todos })
			console.log('Called did mount')
		}

		window.addEventListener('beforeunload', () => {
			const { todos } = this.state
			const json = JSON.stringify(todos)
			localStorage.setItem('todos', json)
			alert('Called un mount')
		})
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
