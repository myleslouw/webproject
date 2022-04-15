import React, { useState } from 'react'
import '../styles/newUserModal.css'
import Axios from 'axios'

function NewUserModal({ trigger, setTrigger }) {

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const showNewDetails = () => {
        console.log(newName + " " + newEmail + " " + newUsername + " " + newPassword);
    }


    const createEmployee = () => {
        Axios.post('http://localhost:3001/create', {    //the client side post request of adding the employee to the database
            name: newName,
            email: newEmail,
            username: newUsername,
            password: newPassword,
        }).then(() => {
            console.log('added Client Side');       //logs success and then adds the new employee in the lsit
        })
    }

    return (trigger) ? (
        <div className='NewUserModal'>
            <div className='NewUserContent'>
                <h2>Please Sign Up</h2>
                <div className='ModalInputs'>
                    <div className='passwordContent'>
                        <label id='lblPassword' className='inputLabel'>Name:</label>
                        <input type="text" id='passwordInput' className='userInputField' onChange={(e) => { setNewName(e.target.value) }} />
                    </div>
                    <div className='passwordContent'>
                        <label id='lblPassword' className='inputLabel'>Email:</label>
                        <input type="text" id='passwordInput' className='userInputField' onChange={(e) => { setNewEmail(e.target.value) }} />
                    </div>
                    <div className='usernameContent'>
                        <label id='lblUsername' className='inputLabel'>UserName:</label>
                        <input type="text" id='usernameInput' className='userInputField' onChange={(e) => { setNewUsername(e.target.value) }} />
                    </div>
                    <div className='passwordContent'>
                        <label id='lblPassword' className='inputLabel'>Password:</label>
                        <input type="text" id='passwordInput' className='userInputField' onChange={(e) => { setNewPassword(e.target.value) }} />
                    </div>
                </div>
                <div className='ModalFooter'>
                    <button id='btnCancel' onClick={() => { setTrigger(false) }}>Close</button>
                    <button id='btnSignUp' onClick={() => { showNewDetails(); createEmployee(); }}>Sign Up</button>
                </div>
            </div>
        </div >
    ) : ""
}

export default NewUserModal