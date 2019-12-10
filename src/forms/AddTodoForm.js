import React, { useState } from 'react'

const AddTodoForm = props => {
    //var todoElement = ''; this doesn't work because we need this variable to be updated in order to show simultaneously on the web.
    
    const [todoElement, setTodoElement] = useState('');//declare todoElement a variable so I can update with state
    //also when this updated, it renders again

    const handleInputChange = event => {
        const {name, value} = event.target
        //todoElement += value; this not necessary because setTodoElement updates with value. #Essentially the same thing with setState(value)
        
        setTodoElement(value);
    }
    return (
        <form
            onSubmit={event => {
                console.log('on submit', todoElement, "here");
                event.preventDefault()//prevent from default submitting the form

                props.user.todos.push(todoElement);//update current prop
                
                props.addTodo(props.user);//change the state
                
                setTodoElement('');//reset the TodoElement
                
            }}>
            <label>Todo!</label>
            <input type="text" name="todos" value={todoElement} onChange={handleInputChange} />
            <button>Add new task</button>
        </form>
    )
}

export default AddTodoForm;