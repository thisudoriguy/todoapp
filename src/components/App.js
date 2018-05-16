import React from "react";
import { render } from "react-dom";
import TodoForm from "../components/TodoForm";
import ToDoList from "../components/TodoList";
//import ToDo from "../components/ToDo";
import Title from "./Title";
import '../App.css';

class App extends React.Component{
     constructor(){
         super();

         this.addTodo = this.addTodo.bind(this);
         //get initial state
         this.state = {
             data:[]
         }
     }

     // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, timestamp: Date.now()}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }

    //  //add todo handler
    //  addTodo(val){
    //      //update state
    //     const todo = {...this.state.todo};
    //     //add in new todo
    //     const timestamp = Date.now();
    //     todo[`val-${timestamp}`] = val;
    //     this.state.todos.push(todo);
    //      //set state
    //      this.setState({todos: this.state.todos})
    //  }

    // //remove todo handler
    // handleRemove(id){
    //     const remainder = this.state.data.filter((todo)=>{
    //         if(todo.id !== id) return todo;
    //     });
    //     //update state after filtering/remaining data
    //     this.setState({data: remainder});
    // }

    render(){
        return(
            <div className="App">
                <Title/>
                <TodoForm addTodo={this.addTodo}/>
                <ToDoList todos={this.state.data}
                            //remove={this.handleRemove.bind(this)}
                            />
            </div> 
        )
    }
}

export default App;