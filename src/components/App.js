import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import jwtDecode from "jwt-decode";
//import './App.css';

// Component imports
import Home from "./Home";
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
    import ReviewScoutingReport from "./MyScoutingReports/ReviewScoutingReport";
    import NewReportSaved from "./MyScoutingReports/NewReportSaved";
    import MyOrgPlayers from "./MyOrg/MyOrgPlayers";
import MyOrg from "./MyOrg/MyOrg";
    import AddOrgMessage from "./MyOrg/AddOrgMessage";
    import DisplayMyOrgMessages from "./MyOrg/DisplayMyOrgMessages";
    import AssignMyOrg from "./MyOrg/AssignMyOrg";
    import AddNewOrg from "./MyOrg/AddNewOrg";
    import ChangeMyOrg from "./MyOrg/ChangeMyOrg";
    import MyPlayerAdded from "./MyOrg/MyPlayerAdded";
import MyTeams from "./MyTeams/MyTeams";
    import EditTeam from "./MyTeams/EditTeam";
import AddTeam from "./MyTeams/AddTeam";
import Search from "./Search/Search";
    import SearchResults from "./Search/SearchResultsPage";
import Login from "./Login/Login";
import Register from './Register/Register';
    import AccountCreatedLandingPage from "./Register/AccountCreatedLandingPage";
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
                    <NavBar user={user} />

                    <div>
                        <Switch>
                            
                            {/* Routes for myProScout.com */}
                            <Route path="/" exact component={Home} />
                            <Route path='/login' exact component={Login} />
                            <Route path="/register" exact component={Register} />
                                <Route path="/register/accountcreated" exact component={AccountCreatedLandingPage} />

                            <Route path="/myplayers" exact component={MyPlayers} />
                            <Route path="/myscoutingreports" exact component={MyScoutingReports} />
                                <Route path="/myscoutingreports/newscoutingreport" exact component={NewScoutingReport} />
                                <Route path="/myscoutingreports/viewreport" exact component={ViewScoutingReport} />
                                <Route path="/myscoutingreports/initiatereport" exact component={InitiateScoutingReport} />
                                <Route path='/myscoutingreports/reviewreport' exact component={ReviewScoutingReport} />
                                <Route path='/myscoutingreports/newreportsaved' exact component={NewReportSaved} />
                                

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
                            <Route path='/myorg/myorgplayers' exact component={MyOrgPlayers} />
                            <Route path='/myorg/newmessage' exact component={AddOrgMessage} />
                            <Route path="/myorg/messageboard" exact component={DisplayMyOrgMessages} />

                                <Route path='/myorg/assignmyorg' exact component={AssignMyOrg} />
                                <Route path='/myorg/addneworg' exact component={AddNewOrg} />
                                <Route path='/myorg/changemyorg' exact component={ChangeMyOrg} />
                                <Route path='/myorg/addtomyplayers' exact component={MyPlayerAdded} />


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