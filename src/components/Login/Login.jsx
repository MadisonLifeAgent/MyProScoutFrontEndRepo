import React, { useState } from "react";

// Component or hook imports
import useLogin from "../../hooks/useLogin";

// Scout Login Form
const Login = ( { props }) => {
    // store user input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        // calls hook to login scout
        <useLogin username={username} password={password} />;

        // reset login form
        // setUsername('');
        // setPassword('');
    }

    // login form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={username} onChange={ (event) => setUsername(event.target.value)} />

                <input type="password" name="password" placeholder="password" value={password} onChange={ (event) => setPassword(event.target.value)} />

                <input type="submit" value="Login" class="btn" />
            </form>
        </div>
    );

}

export default Login;