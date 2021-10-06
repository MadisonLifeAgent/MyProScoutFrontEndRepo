import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all scouting reports for a player
const useGetPlayerScoutingReports = (playerName) => {
    const [playerScoutingReports, setPlayerScoutingReports] = useState();

    // query database for scouting reports
    async function getPlayerScoutingReports(player) {
        const playerFirstLastName = {
            "FirstName": player.firstName,
            "LastName": player.lastName
        }

        try{
            let response = await axios.get('https://localhost:44394/api/playerscoutingreport/myscoutingreports/player', playerFirstLastName);

            // if good api call set scouting reports
            return response.data;
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getPlayerScoutingReports(playerName);
   },[]);
	//return playerScoutingReports;

}

export default useGetPlayerScoutingReports;