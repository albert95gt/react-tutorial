import React, { Component } from 'react';

// import  Counter  from "../Counter";
// import Dropdown from "../Dropdown";
// import ColorPicker  from "../ColorPicker";
// import colorPickerOptions from "../ColorPicker/colorPickerOptions.js"
import initialTodos from '../../todos.json';
import TodoList from '../TodoList';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        {/* <ColorPicker options={colorPickerOptions}/> */}
        {/* <h1>Состояния компонента</h1> */}
        {/* <Counter initialValue={0}/> */}
        {/* <Dropdown /> */}

        <div>
          <p>Общее кол-во туду: {totalTodoCount}</p>
          <p>Кол-во выполненых: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
