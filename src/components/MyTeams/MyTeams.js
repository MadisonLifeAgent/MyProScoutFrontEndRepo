import React from "react";
//import axios from "axios";

// Component or hook imports
import DisplayTeams from "./DisplayTeams";
//import useGetTeams from "../../hooks/useGetTeams";

// Scout profile page
const MyTeams = (props) => {
    //const scout = props.user;

 /*    const teams = useGetTeams();
    console.log("teams");
    console.log(teams); */



    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <h3>myTeams Page</h3>
                <a href="/myteams/addteam">Add New Team</a>
                <DisplayTeams />
            </div>
        )
    }
    // return profile page is user logged in




export default MyTeams;