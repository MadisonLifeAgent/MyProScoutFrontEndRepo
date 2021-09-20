import React from "react";
import './MyScoutingReports.css';

// Component or hook imports
import InitiateScoutingReport from "./InitiateScoutingReport";
import DisplayScoutingReportLinks from "./DisplayScoutingReportLinks";

// Scout profile page
const MyScoutingReports = (props) => {
    //const scout = props.user;

        // routes scout to add message form 
        const handleClick = () => {
            <InitiateScoutingReport />
        }


    // display scouting reports
        return (
            <div id="pages">
                <h3 id="pagetitle">myScouting Reports Page</h3>
                <a href="/myscoutingreports/initiatereport" id="newreportbutton" onClick={handleClick}>Start New Scouting Report</a>

                <DisplayScoutingReportLinks />
            </div>
        )
    }


export default MyScoutingReports;