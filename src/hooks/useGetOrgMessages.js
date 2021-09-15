import React, { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all messages for an organization 
const useGetOrgMessages = (orgId) => {
   const [orgMessages, setOrgMessages] = useState([{}]);
   console.log(orgId);

    // query database for organization messages
    async function getMessages(orgId) {
        try{
            let response = await axios.get(`https://localhost:44394/api/organizationmessages/${orgId}`);
            // if good api call set orgMessages
            setOrgMessages(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getMessages(orgId);
   },[]);
	return [{orgMessages }];

}

export default useGetOrgMessages;