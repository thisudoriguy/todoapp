import React from 'react';
import { getToDo } from "../helpers";


class TodoForm extends React.Component{
    
    getUserInput(e){
        e.preventDefault();
        //get user input
        const data = this.userInput.value
        this.props.addTodo(data);
        console.log(data)   
    }

    render(){
        return(
            <div>
                <form onSubmit={this.getUserInput.bind(this)}>
                    <input type="text" required placeholder="New To Do" ref={(input)=>{
                        this.userInput = input;
                    }} defaultValue={getToDo()} />
                    <button > + </button>
                </form>
            </div>
            
        )
    }
}
        

export default TodoForm