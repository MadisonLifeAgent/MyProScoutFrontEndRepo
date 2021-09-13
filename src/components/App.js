import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import './App.css';

// component imports
import NavBar from "./NavBar";

// main component
class App extends Component {
    state = { }

    // get user
    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
        } catch {

        }
    }

    render() {
        // store the user
        const user = this.state.user;

        // display different nav bars based on user status
        return (
            <div className="App">
                <h3>MyProScout</h3>

                <NavBar user={user} />
                <div>
                    <Switch>

                        <Route path="/myprofile" render={props => {
                            if (!user) {
                                return <Redirect to="/login" />;
                            } else {
                                return <MyProfile {...props} user={user} />
                            }
                        }} />

                        {/* Routes for myProScout.com */}
                        <Route path="/" />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={Register} />
                        <Route path="/myplayers" component={MyPlayers} />
                        <Route path="/myplayers/:playerId" component={PlayerProfilePage} />
                        <Route path="/myScoutingReports" component={MyScoutingReports} />
                        <Route path="/myorganization" component={MyOrganization} />
                        <Route path="/myteams" component={MyTeams} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;