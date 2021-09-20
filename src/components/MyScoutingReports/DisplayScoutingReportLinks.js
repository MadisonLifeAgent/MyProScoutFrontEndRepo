import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

// Component or hook imports
import useGetScoutingReports from "../../hooks/useGetScoutingReports";
import './DisplayScoutingReportLinks.css';

// this component a scout's scouting reports and lists them with a clickable link to view each report
const DisplayScoutingReportLinks = (props) => {
    // get all teams
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }

    const scout = getUser();

    const myScoutingReports = useGetScoutingReports(scout.id);

    // display links to all reports, but list one at a time
    const showReportsLinks = myScoutingReports.map((item) => {
        return (
            <React.Fragment >
                <dt id="itemtitle">Player: {item.firstName} {item.lastName}  (Report ID#: {item.playerScoutingReportId})</dt>
                    <dd>Game: {item.playerBaseballTeamName} VS. {item.opponentTeam}</dd>

                    <Link id="reportlink" to={{
                        pathname: `/myscoutingreports/viewreport`,
                        state: {
                            scoutingReport: item,
                        }
                    }}>View Report</Link>
                
            </React.Fragment>
        );
    })



    // displays reports or loading message if no reports
    if (!myScoutingReports) {
        return (
            <p id="pagetitle">Loading...</p>
        )
    }
    else {
        return (
            <div>
                <p id="mapped">Available Reports</p>
                <dl id="items">
                    {showReportsLinks}
                </dl>
            </div>
        )
    }

}
    // return profile page is user logged in




export default DisplayScoutingReportLinks;