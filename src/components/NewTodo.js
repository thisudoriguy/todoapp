import React from 'react';
import { getToDo } from "../helpers";
import '../App.css';

class NewTodoForm extends React.Component{
    // constructor(){
    //     super();
    //     this.getUserInput = this.getUserInput.bind(this);
    // }

    getUserInput(e){
        e.preventDefault();
        //get user input
        console.log(this.userInput.value)   
    }

    render(){
        return(
            <form onSubmit={this.getUserInput.bind(this)}>
                <input type="text" required placeholder="New To Do" ref={(input)=>{
                    this.userInput = input;
                }} defaultValue={getToDo()} />
                <button> + </button>
            </form>
        )
    }
}
        

export default NewTodoForm