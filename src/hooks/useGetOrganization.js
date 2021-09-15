import React, { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets a scout's organization 
const useGetOrganization = (userId) => {
   const [scoutOrganization, setScoutOrganization] = useState({});

    // query database for organization
    async function getOrganization() {
        try{
            let response = await axios.get(`https://localhost:44394/api/scoutorganizationjoin/${userId}`);
            // if good api call set scoutOrganization
            console.log("scout org details");
            console.log(response.data);
            setScoutOrganization(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getOrganization(userId);
   },[]);
	return scoutOrganization;

}

export default useGetOrganization;