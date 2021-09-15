import React from "react";

// Component or hook imports
import UseGetTeams from "../../hooks/UseGetTeams";

// Scout profile page
const DisplayTeams = (props) => {
    // get all teams
    const [{teams}] = UseGetTeams([{}]);
    console.log("teams");
    console.log(teams);

    // display all teams
    const showTeams = teams.map((item) => {
        return (
            <React.Fragment>
                <li>{item.baseballTeamName}</li>
            </React.Fragment>
        );
    })



    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <h3>myTeams List</h3>
                <ul>
                    {showTeams}
                </ul>
            </div>
        )
    }
    // return profile page is user logged in




export default DisplayTeams;