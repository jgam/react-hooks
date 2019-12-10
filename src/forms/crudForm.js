import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap'


const crudForm = props => {
    if(!props.currentUser.todos){props.currentUser.todos=[];}
    const todoChanged = changed =>{
        //the state needs to be changed in order to display.
        props.currentUser = changed;
    }
    console.log(props);
    return (//first with adding the to do
        <div>
            hello {props.currentUser.name}
            <AddTodoForm user={props.currentUser} addTodo={props.addTodo} setTodoElement={props.setTodoElement} todoChanged={todoChanged}/>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />
            <table>
                <thead>
                    <tr>
                        <th>Todo list</th>
                        <th>Check</th>
                    </tr>
                </thead>

                <tbody>
                    {props.currentUser.todos.length > 0 ? (
                        props.currentUser.todos.map(todo =>(
                            <tr >
                                <td>{todo}</td>
                                <td><Button onClick={()=>props.doneTodo(props.currentUser, todo)}>Done</Button></td>
                            </tr>
                            )
                        )
                    ):(
                        <tr>
                            <td>No activity</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default crudForm;