import React from 'react';
//import TodoList from "./TodoList";

import '../App.css';

class Todo extends React.Component{
	render(){
		return(
			<li>{this.props.Todo}</li>
		)
	}
}

 
export default Todo; 
