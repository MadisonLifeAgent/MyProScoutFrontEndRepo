import React, { useState } from "react";
import axios from 'axios';

import './AddScoutingReportNote.css';


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
        
        if (response) {
            console.log("good call");
            window.location = "/myscoutingreports/viewreport";
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addScoutngReportNote(messageInfo);
    }

    // add note form
    return (
        
        <div>
            <h4 id="notes">New Note Form</h4>
            <form onSubmit={handleSubmit}>
                <textarea id="formbox" name="playerScoutingReportNoteBody" placeholder="Enter Note Here..." value={playerScoutingReportNoteBody} onChange={ (event) => setplayerScoutingReportNoteBody(event.target.value)} class="ms-3 mb-3" rows="2" cols="25"/>
                <br />

                <input id="newnotebutton" type="submit" value="Add Note" class="btn btn-primary ms-3" />
            </form>
        </div>
    )

}

export default AddScoutingReportNote;