import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all players
const UseGetPlayerProfileDetails = (playerId) => {
   const [player, setPlayer] = useState({});

    // get all players in database
    async function getPlayerProfile(playerProfileId) {
        try{
            let response = await axios.get(`https://localhost:44394/api/playerprofile/${playerProfileId}`);
            // if good api call ste the teamRegions
            setPlayer(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get payers as soon as hook is requested
   useEffect(() => {
    getPlayerProfile(playerId);
   },[]);
	return player;

}

export default UseGetPlayerProfileDetails;