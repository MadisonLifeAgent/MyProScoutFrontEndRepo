import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all notes for report 
const useGetScoutingReportNotes = (reportId) => {
   const [reportNotes, setReportNotes] = useState([{}]);

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

   return reportNotes;
}

export default useGetScoutingReportNotes;