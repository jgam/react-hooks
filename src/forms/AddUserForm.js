import React, { useState } from 'react'

const AddUserForm = props => {
    const initialFormState = {id:null, name:'', username:''}
    const [user, setUser] = useState(initialFormState)

const handleInputChange = event => {
    const {name, value} = event.target

    setUser({...user, [name]: value})
}

    return (
        <form
            onSubmit={event => {
                event.preventDefault()//prevent from default submitting the form
                if(!user.name || !user.username) return//error checking to not send the empty username
                props.addUser(user)//actually adding to the props
                setUser(initialFormState)//setter to reset the form to its initial value after scucessful submission
            }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm