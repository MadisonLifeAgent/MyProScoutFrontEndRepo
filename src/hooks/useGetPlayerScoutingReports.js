import { useState, useEffect } from "react";
import axios from 'axios';

// this hook gets all scouting reports for a scout
const useGetPlayerScoutingReports = (playerName) => {
    const [playerScoutingReports, setPlayerScoutingReports] = useState();

    // query database for scouting reports
    async function getPlayerScoutingReports(player) {
        const playerFirstLastName = {
            FirstName: player.firstName,
            LastName: player.lastName
        }

        try{
            const response = await axios.get('https://localhost:44394/api/playerscoutingreport/myscoutingreports/player', playerFirstLastName);
            console.log(response.data)
            // if good api call set scouting reports
            setPlayerScoutingReports(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }
       
   // get organization as soon as hook is requested
   useEffect(() => {
    getPlayerScoutingReports(playerName);
   },[]);
	return playerScoutingReports;

}

export default useGetPlayerScoutingReports;