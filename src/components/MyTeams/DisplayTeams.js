import React from "react";
import axios from 'axios';

// Component or hook imports
import UseGetTeams from "../../hooks/UseGetTeams";
import EditTeam from './EditTeam';


// Scout profile page
const DisplayTeams = (props) => {
    // get all teams
    const [{teams}] = UseGetTeams([{}]);
    console.log("teams");
    console.log(teams);

    async function deleteTeam(teamId) {
        try{
            let response = await axios.delete(`https://localhost:44394/api/baseballteams/delete/${teamId}`);
            // if good api call ste the teamRegions
            console.log("team deleted");
            window.location = '/myteams';
        }
        catch(ex) {
            console.log("bad api call");
        }
    }

    

    // display all teams and edit/delete buttons
    const showTeams = teams.map((item) => {
        const handleClick = () => {
            <EditTeam team={item} />
        }
        return (
            <React.Fragment>
                <dt>{item.baseballTeamName}</dt>
                    <dd>Level: {item.competitionLevelName}</dd>
                    <dd>Region: {item.regionName}</dd>

                    <a href="/myteams/editteam" class="btn btn-primary me-3" onClick={handleClick}>Edit (Not Complete)</a>
                    
                    <input type="button" class="btn btn-primary" value="Delete Team" onClick={(event) => deleteTeam(item.baseballTeamId)} />

                    <br/><br/>


            </React.Fragment>
        );
    })



    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <h3>myTeams List</h3>
                <dl>
                    {showTeams}
                </dl>
            </div>
        )
    }
    // return profile page is user logged in




export default DisplayTeams;