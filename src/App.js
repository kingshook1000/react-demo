import React, {Component} from 'react';
import Todos from './Todos';
import StyleSheet from './StyleSheet';

class App extends Component
{
  state = {
    todos : [
      {id: 1, content: "Buy milk"},
      {id: 2, content: "Buy Bread"},
    ],
    name: "Azam",
  }

  deleteTodo = (id) =>{
    console.log(id);
    const todos = this.state.todos.filter( todo=>{
      return todo.id !==id;
    });
    this.setState({todos});
  }
  componentDidMount(){
    console.log("Component Mounted");
  }
  render(){
      return (
          <div className="todo-app container">
            <h1>{this.state.name}</h1>
            <StyleSheet primary={false}/>
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          </div>
      )
  }
}

export default App;
