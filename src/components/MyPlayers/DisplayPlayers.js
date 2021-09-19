import React, { useState, useParams, useLocation } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


// Component or hook imports
import UseGetPlayers from "../../hooks/UseGetPlayers";

// this component gets players and displays them
const DisplayPlayers = (props) => {
    const scout = props.scout;

    // get all players
    const [{players}] = UseGetPlayers([{}]);



    async function deletePlayer(playerId) {
        //try{
            let response = await axios.delete(`https://localhost:44394/api/playerprofile/delete/${playerId}`);

            //console.log("player deleted");
            window.location = '/myplayers';
        /* }
        catch(ex) {
            console.log("bad api call");
        } */
    }

    async function joinPlayerScout(playerId, scoutId) {
        const joinInfo = {
            "PlayerProfileId": playerId,
            "Id": scoutId
        }

        try{
            let response = await axios.post(`https://localhost:44394/api/playerscoutjoin/add`, joinInfo);

            console.log("player added");
         }
        catch(ex) {
            console.log("bad api call");
        }
    }

    // display all players and edit/delete buttons
    const showPLayers = players.map((item) => {
        const playerProfileId = item.playerProfileId;
        return (
            <React.Fragment>
                <dt>{item.firstName} {item.lastName}</dt>
                    <dd>Position: {item.playerPositionPrimaryName}</dd>
                    <dd>Batthing Hand: {item.playerBattingHandednessName}</dd>
                    <dd>Throwing Hand: {item.playerThrowingHandednessName}</dd>

                    <Link class="btn btn-primary me-3" to={{
                        pathname: `/myplayers/playerprofile`,
                        state: {
                            player: item,
                        }
                    }}>View Profile</Link>

                    <Link class="btn btn-primary me-3" to={{
                        pathname: `/myplayers/editplayer`,
                        state: {
                            player: item,
                        }
                    }}>Edit Profile</Link>

                    <Link class="btn btn-primary me-3" to={{
                        pathname: `/myorg/addtomyplayers`,
                        state: {
                            player: item,
                            scout: scout,
                        }
                    }} onClick={(event) => joinPlayerScout(playerProfileId, scout.id)}>Add to myPlayers</Link>
                    
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