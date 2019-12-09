import React, { useState } from 'react'

const AddTodoForm = props => {
    var todoElement;
    console.log(props)
    return (
        <form
            onSubmit={event => {
                event.preventDefault()//prevent from default submitting the form
                //props.addUser(user)//actually adding to the props
                
                //todos.add(todoElement);//add element to todos
                props.user.todos.push(todoElement);
                //then send this data to Prop
                props.addTodo(props.user);
                todoElement = '';
                //setTodo(initialFormState)//setter to reset the form to its initial value after scucessful submission
            
            }}>
            <label>Todo!</label>
            <input type="text" name="todos" value={todoElement} />
            <button>Add new task</button>
        </form>
    )
}

export default AddTodoForm;