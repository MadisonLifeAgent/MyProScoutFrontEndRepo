import React from "react";

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
            <div>
                <h3>myScouting Reports Page</h3>
                <a href="/myscoutingreports/initiatereport" class="btn btn-primary ms-3 mb-3" onClick={handleClick}>Start New Scouting Report</a>

                <DisplayScoutingReportLinks />
            </div>
        )
    }
    // return profile page is user logged in




export default MyScoutingReports;