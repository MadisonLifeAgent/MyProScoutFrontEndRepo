import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import './App.css';

// Component imports
import NavBar from "./NavBar";
import Login from "./Login/Login";
import MyProfile from "./MyProfile/MyProfile";

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
            });
        } catch {
        }
    }


    render() {
        const user = this.state.user;

        // Display different nav bars based on user status
        return (
            <div>
                <NavBar user={user} />
                <div>
                    <Switch>

                        <Route path="/myprofile" render={props => {
                            if (!user) {
                                return <Redirect to="/login" />;
                            } else {
                                    return <MyProfile {...props} user={user} />;
                                }
                        }} />

                        {/* Routes for myProScout.com */}
                        <Route path="/" />
                        <Route path="/login" component={Login} />
                        {/*}
                        <Route path="/register" component={Register} />
                        <Route path="/myplayers" component={MyPlayers} />
                        <Route path="/myplayers/:playerId" component={PlayerProfilePage} />
                        <Route path="/myScoutingReports" component={MyScoutingReports} />
                        <Route path="/myorganization" component={MyOrganization} />
                        <Route path="/myteams" component={MyTeams} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/not-found" component={NotFound} /> */}
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>

        );
    }
}

export default App;