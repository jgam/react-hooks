import React, { useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import CrudForm from './forms/CrudForm'

import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //this is user data
  const usersData = [
    {id: 1, name: 'Tania', username:'floppydiskette'},
    {id: 2, name: 'Jimmy', username:'jgam'},
    {id: 3, name: 'Bridget', username:'bridgetgam'},
  ]

  const [users, setUsers] = useState(usersData)//useState returns [stateValue, function that sets the stateValue]
  //special about hooks

  const addUser = user => {
    console.log(users);
    user.id = users.length + 1
    setUsers([...users, user])//takes in array [current values to be added new Value, new value]
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))//users filteringg
  }

  const [editing, setEditing] = useState(false)
  const [crudState, setCrud] = useState(false)

  const initialFromState = {id: null, name:'', username:''}

  const [currentUser, setCurrentUser] = useState(initialFromState)

  const editRow = user => {
    setEditing(true)

    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  const editCrud = user => {
    setCrud(true);
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossOrigin="anonymous"
/>
      <h1> CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
                ) : (
            <div>
              <h2>Adddd user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <br></br>
        <br></br>

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} editCrud={editCrud}/>
          { crudState ? (
            <CrudForm editCrud={editCrud}/>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}


export default App