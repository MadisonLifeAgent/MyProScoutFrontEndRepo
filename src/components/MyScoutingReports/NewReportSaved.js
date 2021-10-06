import React from "react";

// landing page after report saved
const NewReportSaved = (props) => {
    const scoutingReport = props.location.state.scoutingReport;

    return (
        <div id="pages">
            <p id="pagetitle">Report for {scoutingReport[0].firstName} {scoutingReport[0].lastName} saved!</p>

            <a id="newnotebutton" href="/myscoutingreports">Go to myReports</a>
        </div>

    )
}

export default NewReportSaved;