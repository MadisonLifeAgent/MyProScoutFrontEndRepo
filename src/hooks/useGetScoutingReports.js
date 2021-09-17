import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all scouting reports for a scout
const useGetScoutingReports = (id) => {
   const [scoutingReports, setScoutingReports] = useState([{}]);

    // query database for scouting reports
    async function getScoutingReports(id) {
        try{
            const response = await axios.get(`https://localhost:44394/api/playerscoutingreport/myscoutingreports/${id}`);

            // if good api call set scouting reports
            setScoutingReports(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getScoutingReports(id);
   },[]);
	return scoutingReports;

}

export default useGetScoutingReports;