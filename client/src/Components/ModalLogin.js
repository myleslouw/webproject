import React from 'react'
import '../styles/ModalLogin.css'
import { useState } from 'react'
import Axios from 'axios'

function ModalLogin({ trigger, setTrigger, newUserTrigger }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    //continue https://www.youtube.com/watch?v=sTHWNPVNvm8&t=0s

    const Login = () => {
        Axios.post('http://localhost:3001/login', {    //the client side post request of logging in
            loginUsername: username,
            loginPassword: password,
        }).then((response) => {
            if (response.data.message) {        //if the message property exists (meaning it returns an error and not a user), it will log and set it
                console.log(response.data);
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus("Hi " + response.data[0].employeeName)
                console.log(response.data[0].employeeUsername)
            }
        });
    };

    return (trigger) ? (
        <div className='ModalLogin'>
            <div className='ModalContent'>
                <h2>Please Log In</h2>
                <div className='ModalInputs'>
                    <div className='usernameContent'>
                        <label id='lblUsername' className='inputLabel'>UserName:</label>
                        <input type="text" id='usernameInput' className='userInputField' onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className='passwordContent'>
                        <label id='lblPassword' className='inputLabel'>Password:</label>
                        <input type="text" id='passwordInput' className='userInputField' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                </div>
                <div className='ModalFooter'>
                    <button id='btnCancel' onClick={() => { setTrigger(false) }}>Close</button>
                    <button id='btnSignUp' onClick={() => { setTrigger(false); newUserTrigger() }}>Sign Up</button>
                    <button id='btnConfirm' onClick={() => { Login() }}>Confirm</button>
                </div>
                <p id='errorText'>{loginStatus}</p>
            </div>
        </div >
    ) : ""
}

export default ModalLogin