import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

class TodoForm extends React.Component {
	state = { todo: '' }

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addTodo(this.state.todo)
		this.setState({ todo: '' })
	}

	handleChange = (e) => {
		this.setState({ todo: e.target.value })
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<Input
						value={this.state.todo}
						onChange={this.handleChange}
						placeholder="Add a Todo..."
					/>
				</Form.Field>
				<Button color="green" fluid>
					Add Todo
				</Button>
			</Form>
		)
	}
}

export default TodoForm
