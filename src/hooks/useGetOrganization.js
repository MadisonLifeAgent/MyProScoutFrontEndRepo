import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets a scout's organization 
const useGetOrganization = (id) => {
   const [scoutOrganization, setScoutOrganization] = useState({});

    // query database for organization
    async function getOrganization(userId) {
        //try{
            let response = await axios.get(`https://localhost:44394/api/scoutorganizationjoin/${userId}`);
            // if good api call set scoutOrganizatin
            //console.log(response.data);
            setScoutOrganization(response.data);
        /*}
         catch(ex) {
            console.log("bad api call");
        } */
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getOrganization(id);
   },[]);
	return scoutOrganization;

}

export default useGetOrganization;