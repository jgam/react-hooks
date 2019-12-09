import React from 'react'
import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = props => (
    <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
            />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <Button onClick={()=> props.editCrud(user)}>select</Button>
                            <Button onClick={()=>{
                                props.editRow(user)
                            }}
                                className="button muted-button">Edit</Button>

                            <Button variant="danger" onClick={()=> props.deleteUser(user.id)} className="button muted-button">Delete</Button>
                            
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={3}>No Users</td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
)

export default UserTable