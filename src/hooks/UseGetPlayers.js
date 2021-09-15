import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all players
const UseGetPlayers = () => {
   const [players, setPlayers] = useState([{}]);

    // get all players in database
    async function getPlayers() {
        try{
            let response = await axios.get(`https://localhost:44394/api/playerprofile/all`);
            // if good api call ste the teamRegions
            setPlayers(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get payers as soon as hook is requested
   useEffect(() => {
    getPlayers();
   },[]);
	return [{ players }];

}

export default UseGetPlayers;