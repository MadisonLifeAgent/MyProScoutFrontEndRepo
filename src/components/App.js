import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
//import './App.css';

// Component imports
import NavBar from "./NavBar/NavBar";
import MyPlayers from "./MyPlayers/MyPlayers";
    import EditPlayer from "./MyPlayers/EditPlayers";
    import ViewPlayerProfile from './MyPlayers/ViewPlayerProfile';
    import PlayerProfileScoutingReports from "./MyPlayers/PlayerProfileScoutingReports";
import AddPlayer from './AddPlayer/AddPlayer';
import MyScoutingReports from "./MyScoutingReports/MyScoutingReports";
    import NewScoutingReport from "./MyScoutingReports/NewScoutingReport";
    import ViewScoutingReport from "./MyScoutingReports/ViewScoutingReport";
    import InitiateScoutingReport from "./MyScoutingReports/InitiateScoutingReport";
import MyOrg from "./MyOrg/MyOrg";
    import AddOrgMessage from "./MyOrg/AddOrgMessage";
    import DisplayMyOrgMessages from "./MyOrg/DisplayMyOrgMessages";
    import AddNewOrg from "./MyOrg/AddNewOrg";
import MyTeams from "./MyTeams/MyTeams";
    import EditTeam from "./MyTeams/EditTeam";
import AddTeam from "./MyTeams/AddTeam";
import Search from "./Search/Search";
    import SearchResults from "./Search/SearchResultsPage";
import Login from "./Login/Login";
import Register from './Register/Register';
import MyProfile from "./MyProfile/MyProfile";
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
                            
                            {/* Routes for myProScout.com */}
                            <Route path="/" exact />
                            <Route path='/login' exact component={Login} />
                            <Route path="/register" exact component={Register} />

                            <Route path="/myplayers" exact component={MyPlayers} />
                            <Route path="/myscoutingreports" exact component={MyScoutingReports} />
                                <Route path="/myscoutingreports/newscoutingreport" exact component={NewScoutingReport} />
                                <Route path="/myscoutingreports/viewreport" exact component={ViewScoutingReport} />
                                <Route path="/myscoutingreports/initiatereport" exact component={InitiateScoutingReport} />
                                

                            <Route path="/addPlayer" exact component={AddPlayer} />
                            <Route path="/myplayers/editplayer" exact component={EditPlayer} />
                                <Route path="/myplayers/playerprofile" exact render={props => { return <ViewPlayerProfile {...props} />; }} />
                            <Route path="/myplayers/playerprofile/playerscoutingreport" exact component={PlayerProfileScoutingReports} />

                            <Route path="/myteams" exact component={MyTeams} />
                                <Route path="/myteams/addteam" exact component={AddTeam} />
                                <Route path="/myteams/editteam" exact render={props => { return <EditTeam {...props}  />; }} />

                            <Route path="/search" exact component={Search} />
                                <Route path="/search/results:searchTerm" exact component={SearchResults} />


                            <Route path="/myorg" exact 
                                render={props => {
                                    return <MyOrg {...props} user={user}
                                    />;
                                }
                            } />
                            <Route path='/myorg/newmessage' exact component={AddOrgMessage} />
                            <Route path="/myorg/messageboard" exact component={DisplayMyOrgMessages} />

                            <Route path='/myorg/addneworg' exact component={AddNewOrg} />


                            <Route path="/myprofile" exact
                                    render={props => {
                                        if (!user){
                                            return <Redirect to='/login' />;
                                        } else {
                                            return <MyProfile {...props} user={user} />;
                                        }
                                    }} />
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