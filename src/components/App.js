import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
//import './App.css';

// Component imports
import NavBar from "./NavBar/NavBar";
import Login from "./Login/Login";
import MyProfile from "./MyProfile/MyProfile";
import Register from './Register/Register';
import EditMyProfile from "./MyProfile/EditMyProfile";

// Main component
class App extends Component {
    state = { }

    // gets token from local storatge

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            })
            console.log(user);
        } catch {
        }
    }

        
    

    render() { 
        const user = this.state.user;
    
        // Display different nav bars based on user status
        return (
            <main>
                <div>
                    <a href="/">myProScout.com</a>

                    <NavBar user={user} />
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
                            <Route path="/editmyprofile" exact component={EditMyProfile} />
                            <Redirect to="/not-found" />
                        </Switch>
                        
                    </div>

                </div>
            </main>
        );
    }
}

export default App;

/* const Login = () => {
    <Fragment>
        <div>
            <Login />
        </div>
    </Fragment>
} */