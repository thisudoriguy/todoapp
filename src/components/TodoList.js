import React from 'react';
import Todo from "./ToDo";

import '../App.css';

class ToDoList extends React.Component{
	render(){
		return(
			<ul>
				{
					Object 
						.keys(this.state.data)
						.map(key => <Todo key={key} details={this.state.data} />)
				}
			</ul>
			
		)
	}
}

export default ToDoList; 

//<Todo addTodo={this.props.addTodo} />