
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
        console.log(reportNotes);
            return (
                <div>
                    <dt>By: {item.user.firstName} {item.user.lastName}</dt>
                    <dd>{item.playerScoutingReportNoteBody}</dd>
                </div>
            )
        });
    
   
     // displays organization messages
    if (reportNotes[0] != null){
        return (
            <p>No Notes.</p>
        )
    
        }
    
    else {
        return (
            <div>
                <h4>Previous Notes</h4>
                <dl>
                   {showReportNotes}  
                </dl>
            </div>

        )
    } 
        
}

export default ViewScoutingReportNotes;