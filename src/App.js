import React, { useState} from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import CrudForm from './forms/CrudForm'

import {Bootstrap, Grid, Row, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyComponent from '@rakuten-rex/react-component-starter-kit';//this is REX requirement component.
import RexComponent from '@rakuten-rex/button';
import 'rex-core';
import {Card} from 'rex-card';
import './reset.css'
import './App.css'

const App = () => {
  //this is user data
  const usersData = [
    {id: 1, name: 'Tania', username:'floppydiskette'},
    {id: 2, name: 'Jimmy', username:'jgam'},
    {id: 3, name: 'Bridget', username:'bridgetgam'},
  ]

  const [users, setUsers] = useState(usersData)//useState returns [stateValue, function that sets the stateValue]
  //special about hooks
  const [todoElement, setTodoElement] = useState('');

  const addUser = user => {
    console.log(users);
    user.id = users.length + 1
    setUsers([...users, user])//takes in array [current values to be added new Value, new value]
  }

  const addTodo = currentUser => {
    // with user ID, we check Todos.
    console.log('addTodo');
    console.log(currentUser);
    //updateTodo(user);
    setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));

  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))//users filteringg
  }

  const [editing, setEditing] = useState(false)
  const [crudState, setCrud] = useState(false)

  const initialFromState = {id: null, name:'', username:''}

  const [currentUser, setCurrentUser] = useState(initialFromState)

  const editRow = user => {//edit row
    setEditing(true)

    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  const editCrud = user => {//detecting user clicked select for CRUD
    setCrud(true);
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const doneTodo = (currentUser, currentAction) => {//deletes todo based on currentAction
    const newTodos = currentUser.todos.filter(item => item !== currentAction)//filtering todos
    currentUser.todos = newTodos;//assign new todos to original todos
    setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));//set states to get a new render
  }

  return (
    <div className="wrap">
      <head>
        <title>Rakuten Portal</title>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        
         
      </head>

      <body>
        <div id = "wrap">
          <div id="header" role="header">
            <div class="container">
              <div class="header">
                <div class="header-menu">
                  <a href="https://google.com">Sign up</a>
                  <a href="https://naver.com">Login</a>
                </div>

                

                <div class="header-icon">
                  <a href="#" class="icon1"><span class="ir_pm">icon1</span></a>
                  <a href="#" class="icon2"><span class="ir_pm">icon2</span></a>
                  <a href="#" class="icon3"><span class="ir_pm">icon3</span></a>
                  <a href="#" class="icon4"><span class="ir_pm">icon4</span></a>
                </div>

                <div class="header-tit">
                  <h1>Rakuten IOT Portal Image</h1><br></br>
                  <a href="https://google.com">Rakuten ID: this is subtitle</a>
                </div>
              </div>
            </div>
          </div>
          <div id="side">
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
          </div>
          <div id="contents">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Rakuten IoT Dashboard</h5>
                <p class="card-text">Rakuten Dashboard provides the "best" quality for IoT with our amazing 5G network</p>
                <img class="icon1" src="img/rakuten/Dashboardoutline.png" />
                <a class="card-link">Card link</a>
                <a class="card-link">Another link</a>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Rakuten Home IoT solutions</h5>
                <p class="card-text">Currently, Hiro and Young are working on this to deliver the best product ever encountered in life!</p>
                <p>
                  <img src=""></img>
                </p>
                <a class="card-link">Card link</a>
                <a class="card-link">Another link</a>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Rakuten IoT Smart Wearables</h5>
                <p class="card-text">Smart wearables will caculate every chocolate piece you eat and make you regret.</p>
                <p>
                  <img src=""></img>
                </p>
                <a class="card-link">Card link</a>
                <a class="card-link">Another link</a>
              </div>
            </div>

            
            
          </div>

          <div id="footer">Footer
            
          </div>
        </div>
        
      </body>
      <RexComponent>hello World</RexComponent>
      <div className="flex-row">
                
                <br></br>
                <br></br>

                <div className="flex-large">
                  <h2>View users</h2>
                  <UserTable users={users} deleteUser={deleteUser} editRow={editRow} editCrud={editCrud}/>
                  <br></br>
                  <br></br>
                  <br></br>

                  { crudState ? (
                    <CrudForm currentUser={currentUser} addTodo={addTodo} setTodoELement={setTodoElement} doneTodo={doneTodo}/>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            <MyComponent />
    </div>
  )
}


export default App