import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all messages for an organization 
const useGetOrgMessages = (orgId) => {
   const [orgMessages, setOrgMessages] = useState([]);

    // query database for organization messages
    async function getMessages(orgId) {
        try{
            const response = await axios.get(`https://localhost:44394/api/organizationmessages/myorg/${orgId}`);

            console.log("response data");
            console.log(response.data);
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
	return orgMessages;

}

export default useGetOrgMessages;