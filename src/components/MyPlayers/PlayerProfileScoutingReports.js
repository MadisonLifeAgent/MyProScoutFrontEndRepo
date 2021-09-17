import React, { useState, useEffect } from "react";
import axios from 'axios';

// Component or hook imports
import useGetPlayerScoutingReports from "../../hooks/useGetPlayerScoutingReports";

// this component a scout's scouting reports and lists them with a clickable link to view each report
const PlayerProfileScoutingReports = (props) => {
    // get the player from props
    const player = props.location.state.player;

    const [playerScoutingReports, setPlayerScoutingReports] = useState([{}]);

    // query database for scouting reports
    async function getPlayerScoutingReports(aPlayer) {
        const playerFirstLastName = {
            "FirstName": aPlayer.firstName,
            "LastName": aPlayer.lastName
        }

        try {
            let response = await axios.get(`https://localhost:44394/api/playerscoutingreport/myscoutingreports/${player.firstName}/${player.lastName}`);

            // if good api call set scouting reports
            setPlayerScoutingReports(response.data)
            console.log(response.data);
            console.log("good api call")
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getPlayerScoutingReports(player);
   },[]);


    // display links to all reports, but list one at a time
    const showPlayerScoutingReports = () => {
        return playerScoutingReports.map((item) => {

            return (
                <React.Fragment>
                    <dt>Player: {item.firstName} {item.lastName}</dt>
                        <dd>Game: {item.playerBaseballTeamName} VS. {item.opponentTeam}</dd>
    
{/*                         <Link class="btn btn-primary me-3" to={{
                            pathname: `/myscoutingreports/viewreport`,
                            state: {
                                scoutingReport: item,
                            }
                        }}>View Report</Link> */}
                    
                        <br/><br/>
                </React.Fragment>
            )
        });
    }
    
    



    // displays reports or loading message if no reports
    if (playerScoutingReports) {
        return (
            <div>
                <h3>Scouting Reports</h3>
                <dl>
                    {showPlayerScoutingReports()}
                </dl>
            </div>
        )
    }
    else {
        return (
            <p>Loading...</p>
        )
    }

}
    // return profile page is user logged in




export default PlayerProfileScoutingReports;