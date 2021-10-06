import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// Component or hook imports
import "./PlayerProfileScoutingReports.css";
import useGetPlayerScoutingReports from "../../hooks/useGetPlayerScoutingReports";

// this component gets a scout's scouting reports and lists them with a clickable link to view each report
const PlayerProfileScoutingReports = (props) => {
    // get the player from props
    const player = props.location.state.player;

    const [playerScoutingReports, setPlayerScoutingReports] = useState([{}]);

    // query database for scouting reports
    async function getPlayerScoutingReports(aPlayer) {
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
       
   // get scouting reports as soon as hook is requested
   useEffect(() => {
    getPlayerScoutingReports(player);
   },[]);


    // display links to all reports, but list one at a time
    const showPlayerScoutingReports = () => {
        return playerScoutingReports.map((item) => {

            return (
                <React.Fragment>
                    <dt id="itemtitle">Player: {item.firstName} {item.lastName}</dt>
                        <dd>Game: {item.playerBaseballTeamName} VS. {item.opponentTeam}</dd>
    
                        <Link id="reportlink" to={{
                            pathname: `/myscoutingreports/viewreport`,
                            state: {
                                scoutingReport: item,
                                player: player,
                            }
                        }}>View Report</Link>

                        <Link id="reportlink" to={{
                            pathname: `/myplayers/playerprofile`,
                            state: {
                                player: player,
                            }
                        }}>Go Back</Link>
                    
                        <br/><br/>
                </React.Fragment>
            )
        });
    }

    // displays reports or loading message if no reports
    if (playerScoutingReports.length !== 0) {
        return (
            <div id="pages">
                <h3 id="pagetitle">Scouting Reports</h3>
                <dl>
                    {showPlayerScoutingReports()}
                </dl>
            </div>
        )
    }
    else {
        return (
            <div id="pages">
                <p id="pagetitle">No Reports</p>
                <Link id="reportlink" to={{
                            pathname: `/myplayers/playerprofile`,
                            state: {
                                player: player,
                            }
                        }}>Go Back</Link>
            </div>
        )
    }
}

export default PlayerProfileScoutingReports;