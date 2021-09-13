import React, { useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
//import './App.css';

// Component imports
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import MyProfile from "./MyProfile/MyProfile";
import Register from './Register/Register';

// Main component
export default function App() {
    const [user, setUser] = useState({});


    // gets token from local storatge
    const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            setUser(user);
        } catch {
        }
    
        // Display different nav bars based on user status
        return (
            <main>
                <div>
                    <NavBar />
                    <div>
                        <Switch>
                            <Route path="/myprofile" exact
                                    render={props => {
                                        if (!user){
                                            return <Redirect to='/login' />;
                                        } else {
                                            return <MyProfile {...props} user={user} />;
                                        }
                                    }} />

                            {/* Routes for myProScout.com */}
                            <Route path="/" exact />
                            <Route path='/login' exact component={Login} />
                            <Route path="/register" exact component={Register} />
                            <Redirect to="/not-found" exact />
                        </Switch>
                        
                    </div>

                </div>
            </main>
        );
}

//export default App;

/* const Login = () => {
    <Fragment>
        <div>
            <Login />
        </div>
    </Fragment>
} */