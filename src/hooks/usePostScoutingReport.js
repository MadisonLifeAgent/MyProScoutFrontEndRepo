import { useState, useEffect } from "react";
import axios from 'axios';

// send scouting report to server
const usePostScoutingReport = (scoutingReport) => {

    async function sendScoutingReport(scoutingReport) {
        //try{
            let response = await axios.post('https://localhost:44394/api/playerscoutingreport/add', scoutingReport);
            // if good api call set scoutOrganizatin
            console.log("scouting report posted");
        /*}
         catch(ex) {
            console.log("bad api call");
        } */
    }
}

export default usePostScoutingReport;