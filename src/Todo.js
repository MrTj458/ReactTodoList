import React from 'react'
import { Button, Card, Header, Input, Grid } from 'semantic-ui-react'

class Todo extends React.Component {
	state = { editing: false, stateTodo: this.props.todo }

	toggleEditing = () => {
		if (this.state.editing) {
			this.setState({
				editing: false,
				stateTodo: this.props.todo,
			})
		} else {
			this.setState({
				editing: true,
				stateTodo: this.props.todo,
			})
		}
	}

	handleChange = (e) => {
		e.preventDefault()
		this.setState({ stateTodo: e.target.value })
	}

	handleSubmit = () => {
		this.props.changeTodo(this.props.todo, this.state.stateTodo)
		this.toggleEditing()
	}

	render() {
		const { editing, stateTodo } = this.state
		const { todo } = this.props
		return (
			<Grid.Column computer={4} tablet={8} mobile={16}>
				<Card>
					<Card.Content>
						{editing ? (
							<Input
								name="input"
								value={stateTodo}
								onChange={this.handleChange}
							/>
						) : (
							<Header as="h2">{todo}</Header>
						)}
					</Card.Content>
					<Card.Content extra>
						{editing ? (
							<Button basic color="green" onClick={this.handleSubmit}>
								Save
							</Button>
						) : (
							<Button basic color="green" onClick={this.toggleEditing}>
								Edit
							</Button>
						)}
						{editing ? (
							<Button basic color="red" onClick={this.toggleEditing}>
								Cancel
							</Button>
						) : (
							<Button
								basic
								color="red"
								onClick={() => this.props.deleteTodo(todo)}
							>
								Delete
							</Button>
						)}
					</Card.Content>
				</Card>
			</Grid.Column>
		)
	}
}

export default Todo
