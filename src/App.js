import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Walk the cat', isCompleted: true},
        {description: 'Throw the dishes away', isCompleted: false},
        {description: 'Buy new dishes', isCompleted: false}
      ],
      newTodoDescription: ''
    };

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(e) {
    this.setState({newTodoDescription: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = {description: this.state.newTodoDescription, isCompleted: false};
    this.setState({todos:[...this.state.todos, newTodo], newTodoDescription:''});
  }

  toggleComplete(index) {
    console.log('fired');
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos});
  }

  deleteTodo(index) {
    console.log('delete executed');
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos.filter( 
      todo => todos.indexOf(todo) !== index )
    });
  }

  render() {
    return (
      <div className="App fg-row">
        <h1>My To Do List</h1>
        <ul>
          { this.state.todos.map ( (todo, index) =>
            <ToDo 
              key={ index }
              todoItemId={ (index.length === 2 ? "item-" + index : "item-0" + index) } 
              description={ todo.description } 
              isCompleted={ todo.isCompleted } 
              toggleComplete={ () => this.toggleComplete(index) } 
              deleteTodo={ () => this.deleteTodo(index) } />
          )}
        </ul>
        <h2>Add a to do item</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text"  value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <button type="submit"><i className="fas fa-plus-circle"></i></button>
        </form>
      </div>
    );
  }
}

export default App;
