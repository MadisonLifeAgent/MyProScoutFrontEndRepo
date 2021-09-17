import React from "react";
import { Link } from "react-router-dom";

// Component or hook imports
import useGetPlayerScoutingReports from "../../hooks/useGetPlayerScoutingReports";

// this component a scout's scouting reports and lists them with a clickable link to view each report
const PlayerProfileScoutingReports = (props) => {
    // get the player from props
    const player = props.player;


    const myScoutingReports = useGetPlayerScoutingReports(player);

    //console.log(myScoutingReports);

    // display links to all reports, but list one at a time
    const showPLayerScoutingReports = myScoutingReports.map((item) => {
        return (
            <React.Fragment>
                <dt>Player: {item.firstName} {item.lastName}</dt>
                    <dd>Game: {item.playerBaseballTeamName} VS. {item.opponentTeam}</dd>

                    <Link class="btn btn-primary me-3" to={{
                        pathname: `/myscoutingreports/viewreport`,
                        state: {
                            scoutingReport: item,
                        }
                    }}>View Report</Link>
                
                    <br/><br/>
            </React.Fragment>
        );
    })



    // displays reports or loading message if no reports
    if (!myScoutingReports) {
        return (
            <p>Loading...</p>
        )
    }
    else {
        return (
            <div>
                <h3>Scouting Reports</h3>
                <dl>
                    {showPLayerScoutingReports}
                </dl>
            </div>
        )
    }

}
    // return profile page is user logged in




export default PlayerProfileScoutingReports;