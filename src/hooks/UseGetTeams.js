import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all teams
const UseGetTeams = () => {
   const [teams, setTeams] = useState([{}]);

    // get all teams in database
    async function getTeams() {
        //try{
            let response = await axios.get(`https://localhost:44394/api/baseballteams`);
            // if good api call ste the teamRegions
            setTeams(response.data);
/*         }
        catch(ex) {
            console.log("bad api call");
        } */
    }
       
   // get teams as soon as hook is requested
   useEffect(() => {
       getTeams();
   },[]);
	return [{ teams }];

}

export default UseGetTeams;