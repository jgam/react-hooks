import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

const crudForm = props => {
    if(!props.currentUser.todos){props.currentUser.todos=[];}

    console.log(props);
    return (//first with adding the to do
        <div>
            hello {props.currentUser.name}
            <AddTodoForm user={props.currentUser} addTodo={props.addTodo}/>
            <table>
                <thead>
                    <tr>
                        <th>Todo list</th>
                        <th>Check</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default crudForm;