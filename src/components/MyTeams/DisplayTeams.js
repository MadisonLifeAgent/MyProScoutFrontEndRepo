import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// Component or hook imports
import UseGetTeams from "../../hooks/UseGetTeams";
import EditTeam from './EditTeam';


// this component gets teams and displays them
const DisplayTeams = (props) => {
    // get all teams
    const [{teams}] = UseGetTeams([{}]);

    async function deleteTeam(teamId) {
        try {
            let response = await axios.delete(`https://localhost:44394/api/baseballteams/delete/${teamId}`);
            // if good api call ste the teamRegions
            //console.log("team deleted");
            window.location = '/myteams/deletedteam';
         }
        catch(ex) {
            console.log("bad api call");
        }
    }

    

    // display all teams and edit/delete buttons
    const showTeams = teams.map((item) => {
        return (
            <React.Fragment>
                <dt id="itemtitle">{item.baseballTeamName}</dt>
                    <dd>Level: {item.competitionLevelName}</dd>
                    <dd>Region: {item.regionName}</dd>

                    <Link id="reportlink" to={{
                        pathname: `/myteams/editteam`,
                        state: {
                            team: item,
                        }
                    }}>Edit Team</Link>
                    
                    <input type="button" id="reportlink" value="Delete Team" onClick={(event) => deleteTeam(item.baseballTeamId)} />

            </React.Fragment>
        );
    })



    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <h3 id="game">myTeams List</h3>
                <dl >
                    {showTeams}
                </dl>
            </div>
        )
    }
    // return profile page is user logged in




export default DisplayTeams;