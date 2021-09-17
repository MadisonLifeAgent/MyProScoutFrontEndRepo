
import React from "react";

// Component or hook imports
import useGetScoutingReportNotes from "../../hooks/useGetScoutingReportNotes";


// this component gets players and displays them
const ViewScoutingReportNotes = (props) => {
    // get scout details
    const reportId = props.reportId;

    // get all players
    const reportNotes = useGetScoutingReportNotes(reportId);

    console.log(reportNotes);

    // display all organization messages
    const showReportNotes = () =>{
        return reportNotes[0].map((item) => {
    
            return (
                <React.Fragment>
                    <li>{item.playerScoutingReportNoteBody}</li>
                </React.Fragment>

            );
        })
    }
   


    // displays organization messages
    if(showReportNotes){
        return (
            <div>   
                <h4>Previous Notes</h4>
                <ul>
                   {showReportNotes}  
                </ul>
            </div>
        )
    }
    else {
        return (
            <p>Messages Loading...</p>
        )
    }
        
    }

export default ViewScoutingReportNotes;