
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

// Component or hook imports
import useGetScoutingReportNotes from "../../hooks/useGetScoutingReportNotes";

// this component gets players and displays them
const ViewScoutingReportNotes = (props) => {
    // get scout details
    const reportId = props.reportId;


    const [reportNotes, setReportNotes] = useState([]);

    // query database for report notes
    async function getReportNotes(id) {
        try{
            const response = await axios.get(`https://localhost:44394/api/playerscoutingreportnote/${id}`);

           // if good api call set orgMessages
           setReportNotes(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }

    }

        // use as soon as hook is requested
    useEffect(() => {
        getReportNotes(reportId);
    },[]);

    // get all players
/*     const reportNotes = useGetScoutingReportNotes(reportId);
 */
    // display all organization messages
    const showReportNotes = reportNotes.map((item) => {
            console.log(reportNotes)
            return (
                <div id="notes">
                    <dt>By: {item.user.firstName} {item.user.lastName}</dt>
                    <dd>{item.playerScoutingReportNoteBody}</dd>
                </div>
            )
        });
    
   
/*     // displays organization messages
    if(reportNotes){ */
        return (
            <div>
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