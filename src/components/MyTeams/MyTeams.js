import React from "react";

// Component or hook imports
import AddTeam from "./AddTeam";    // add team form/function

// Scout profile page
const MyTeams = (props) => {
    //const scout = props.user;


    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <h3>myTeams Page</h3>
                <AddTeam />
            </div>
        )
    }
    // return profile page is user logged in




export default MyTeams;