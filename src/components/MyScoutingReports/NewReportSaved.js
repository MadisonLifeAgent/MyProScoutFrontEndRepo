import React from "react";

const NewReportSaved = (props) => {
    const scoutingReport = props.location.state.scoutingReport;

    return (
        <div>
            <p>Report for {scoutingReport[0].firstName} {scoutingReport[0].lastName} saved!</p>

            <a href="/" class="btn btn-primary">Go Home</a>
        </div>

    )
}

export default NewReportSaved;