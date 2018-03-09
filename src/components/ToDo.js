import React, { Component } from 'react';

class ToDo extends Component {
	render() {
		return (
			<li>
				<input id={this.props.todoItemId} type="checkbox" checked={this.props.isCompleted} onChange={ this.props.toggleComplete } />
				<label htmlFor={this.props.todoItemId}>{this.props.description}</label>
				<button onClick={ this.props.deleteTodo }><span className="fas fa-minus-circle"></span></button>
			</li>
		);
	}
}

export default ToDo;