import React, { useState } from "react";
import axios from 'axios';


// Scout Login Form
const AddScoutingReportNote = (props) => {
    // get passed in scout and report info
    const scout = props.scout;
    const scoutingReport = props.scoutingReport;

    console.log(scout);
    console.log(scoutingReport);

    // store user input
    const [playerScoutingReportNoteBody, setplayerScoutingReportNoteBody] = useState('');

    const messageInfo = {
        "PlayerScoutingReportNoteBody": playerScoutingReportNoteBody,
        "PlayerScoutingReportId": scoutingReport.playerScoutingReportId,
        "Id": scout.id,
    }

    // call the database and try to post message
    //async function addNewOrgMessage(messageTitle, messageBody, id, orgId) {
    async function addScoutngReportNote(messageInfo) {

        let response = await axios.post('https://localhost:44394/api/playerscoutingreportnote/add', messageInfo);

        //window.location = "/myorg/messageboard";
        
        if (response) {
            console.log("good call");
            // refresh and send user to home page
        } else {
            console.log("bad api call");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();     
        addScoutngReportNote(messageInfo);
    }

    // login form
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