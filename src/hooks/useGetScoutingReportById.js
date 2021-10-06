import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets a scouting report by id
const useGetPlayerScoutingReportById = (reportId) => {
    const [scoutingReport, setScoutingReports] = useState([{}]);

    // query database for scouting reports
    async function getScoutingReport(id) {

        try{
            let response = await axios.get(`https://localhost:44394/api/playerscoutingreport/myscoutingreports/report/${id}`);
            console.log(response.data)
            // if good api call set scouting reports
            setScoutingReports(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getScoutingReport(reportId);
   },[]);
	return scoutingReport;

}

export default useGetPlayerScoutingReportById;