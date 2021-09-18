
import React from "react";

// Component or hook imports
import useGetScoutingReportNotes from "../../hooks/useGetScoutingReportNotes";

// this component gets players and displays them
const ViewScoutingReportNotes = (props) => {
    // get scout details
    const reportId = props.reportId;

    // get all players
    const reportNotes = useGetScoutingReportNotes(reportId);

    // display all organization messages
    const showReportNotes = reportNotes.map((item) => {
            return (
                <div>
                    <dt>By: {item.user.firstName} {item.user.lastName}</dt>
                    <dd>{item.playerScoutingReportNoteBody}</dd>
                </div>
            )
        });
    
   
/*     // displays organization messages
    if(reportNotes){ */
        return (
            <div>
                <h4>Previous Notes</h4>
                <dl>
                   {showReportNotes}  
                </dl>
            </div>

        )
    /* }
    else {
        return (
            <p>Messages Loading...</p>
        )
    } */
        
}

export default ViewScoutingReportNotes;