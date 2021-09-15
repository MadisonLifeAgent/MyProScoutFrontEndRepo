import React from "react";
import axios from 'axios';

// Component or hook imports
import UseGetPlayers from "../../hooks/UseGetPlayers";
//import EditTeam from './EditTeam';


// this component gets teams and displays them
const DisplayPlayers = (props) => {
    // get all teams
    const [{players}] = UseGetPlayers([{}]);

    async function deletePlayer(playerId) {
        try{
            let response = await axios.delete(`https://localhost:44394/api/playerprofile/delete/${playerId}`);
            // if good api call ste the teamRegions
            console.log("player deleted");
            //window.location = '/myplayers';
        }
        catch(ex) {
            console.log("bad api call");
        }
    }

    

    // display all teams and edit/delete buttons
    const showPLayers = players.map((item) => {
        const handleClick = (item) => {
            //<EditTeam players={item} />
        }
        return (
            <React.Fragment>
                <dt>{item.firstName} {item.lastName}</dt>
                    <dd>Position: {item.playerPositionPrimaryName}</dd>
                    <dd>Batthing Hand: {item.playerBattingHandednessName}</dd>
                    <dd>Throwing Hand: {item.playerThrowingHandednessName}</dd>

                    <a href="/myplayers/edit" class="btn btn-primary me-3" onClick={handleClick}>Edit (Not Complete)</a>
                    
                    <input type="button" class="btn btn-primary" value="Delete Player" onClick={(event) => deletePlayer(item.playerProfileId)} />

                    <br/><br/>


            </React.Fragment>
        );
    })



    // displays team, regions, competition levels and create or edit buttons
        return (
            <div>
                <dl>
                    {showPLayers}
                </dl>
            </div>
        )
    }
    // return profile page is user logged in




export default DisplayPlayers;