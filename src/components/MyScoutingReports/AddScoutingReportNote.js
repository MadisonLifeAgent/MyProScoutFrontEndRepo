import React, { useState } from "react";
import axios from 'axios';


// Add scouting report notes form for a specific report
const AddScoutingReportNote = (props) => {
    // get passed in scout and report info
    const scout = props.scout;
    const scoutingReport = props.scoutingReport;

    console.log(scout);
    console.log(scoutingReport);

    // store user input
    const [playerScoutingReportNoteBody, setplayerScoutingReportNoteBody] = useState('');

    // FromBody sent with post request
    const messageInfo = {
        "PlayerScoutingReportNoteBody": playerScoutingReportNoteBody,
        "PlayerScoutingReportId": scoutingReport.playerScoutingReportId,
        "Id": scout.id,
    }

    // call the database and try to post note
    async function addScoutngReportNote(messageInfo) {

        let response = await axios.post('https://localhost:44394/api/playerscoutingreportnote/add', messageInfo);

        // refresh the current page
        window.location = "/myscoutingreports/viewreport";
        
/*         if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        } */
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addScoutngReportNote(messageInfo);
    }

    // add note form
    return (
        
        <div>
            <h4>Add Report Note</h4>
            <form onSubmit={handleSubmit}>
                <textarea name="playerScoutingReportNoteBody" placeholder="Enter Note Here..." value={playerScoutingReportNoteBody} onChange={ (event) => setplayerScoutingReportNoteBody(event.target.value)} class="ms-3 mb-3" rows="2" cols="50"/>
                <br />

                <input type="submit" value="Post Note" class="btn btn-primary ms-3" />
            </form>
        </div>
    )

}

export default AddScoutingReportNote;