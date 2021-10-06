import React, { useState } from "react";
import axios from 'axios';

// Scout Login Form
const Login = () => {
    // store user input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // call the database and try to login
    async function loginRequest(username, password) {
        const userCredentials = {
            "username": username,
            "password": password
            }

        let response = await axios.post('https://localhost:44394/api/authentication/myproscout/login', userCredentials);
        
        if (response.data.token) {
            // store toke if login successful
            localStorage.setItem('token', response.data.token);

            // refresh and send user to home page
            window.location = "/";
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();       
        loginRequest(username, password);
    }

    // login form
    return (
        <div id="forms">
            <h3 id="pagetitle">Please login to get started.</h3>
            <form onSubmit={handleSubmit}>
                <label class="form-label input-group">Username</label>
                <input type="text" name="username" value={username} onChange={ (event) => setUsername(event.target.value)}  class="input-group-text" id="inputfields"/>

                <label class="form-label input-group">Password</label>
                <input type="password" name="password" class="input-group-text" id="inputfields" value={password} onChange={ (event) => setPassword(event.target.value)} />

                <input id="newnotebutton" class="mt-3" type="submit" value="Login"  />
            </form>
        </div>
    )

}

export default Login;