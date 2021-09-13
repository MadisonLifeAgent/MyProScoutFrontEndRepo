import React, { useState, Fragment } from "react";

// Component or hook imports

// Scout Login Form
function Login() {
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
            <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={username} onChange={ (event) => setUsername(event.target.value)}  class="ms-3"/>

                <input type="password" name="password" placeholder="password" value={password} onChange={ (event) => setPassword(event.target.value)} class="ms-3"/>

                <input type="submit" value="Login" class="btn btn-primary ms-3" />
            </form>
            </Fragment>
        </div>
    )

}

export default Login;