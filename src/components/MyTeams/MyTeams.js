import React from "react";
//import axios from "axios";

// Component or hook imports
import DisplayTeams from "./DisplayTeams";
//import useGetTeams from "../../hooks/useGetTeams";

// myTeams page
const MyTeams = (props) => {
    //const scout = props.user;

 /*    const teams = useGetTeams();
    console.log("teams");
    console.log(teams); */



    // displays teams, regions, competition levels and create or edit buttons
        return (
            <div id="forms">
                <h3 id="pagetitle">myTeams Page</h3>
                <a id="newnotebutton" href="/myteams/addteam">Add New Team</a>
                <DisplayTeams />
            </div>
        )
    }

export default MyTeams;