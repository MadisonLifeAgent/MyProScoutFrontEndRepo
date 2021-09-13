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

        let response = await axios.post('https://localhost:44394/api/authentication/login', userCredentials);
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            console.log("good login");
            console.log(response.data.token);

            // refresh and send user to home page
            window.location = "/";
        } else {
            console.log("bad api call");
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        
        loginRequest(username, password);
    }

    

    // login form
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={username} onChange={ (event) => setUsername(event.target.value)}  class="ms-3"/>

                <input type="password" name="password" placeholder="password" value={password} onChange={ (event) => setPassword(event.target.value)} class="ms-3"/>

                <input type="submit" value="Login" class="btn btn-primary ms-3" />
            </form>
        </div>
    )

}

export default Login;