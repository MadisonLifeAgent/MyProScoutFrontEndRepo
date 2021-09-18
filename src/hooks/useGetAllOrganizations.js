import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets a scout's organization 
const useGetAllOrganizations = () => {
   const [organizations, setOrganizations] = useState([{}]);

    // query database for organization
    async function getOrganizations() {
        //try{
            let response = await axios.get(`https://localhost:44394/api/organizations`);
            // if good api call set scoutOrganizatin
            //console.log(response.data);
            setOrganizations(response.data);
        /*}
         catch(ex) {
            console.log("bad api call");
        } */
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getOrganizations();
   },[]);
	return organizations;

}

export default useGetAllOrganizations;