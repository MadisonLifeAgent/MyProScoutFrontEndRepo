import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

// Component or hook imports
//import UseGetPlayers from "../../hooks/UseGetPlayers";

// this component gets players and displays them
const DisplayMyPlayers = (props) => {
    const scout = props.scout;

    const [players, setPlayers] = useState([]);


    async function getMyPlayers(id) {
        try{
            let response = await axios.get(`https://localhost:44394/api/playerscoutjoin/${id}`);

            console.log("good call");
            setPlayers(response.data);
        }
        catch(ex) {
            console.log("bad api call");
        }
    }

    useEffect(() => {
        getMyPlayers(scout.id);
    },[]);

    console.log(players);

    // display all players and edit/delete buttons
    const showPLayers = players.map((item) => {
        const playerProfileId = item.playerProfile.playerProfileId;
        return (
            <React.Fragment>
                <dt id="itemtitle">{item.playerProfile.firstName} {item.playerProfile.lastName}</dt>
                    <dd>Position: {item.playerProfile.playerPositionPrimaryName}</dd>
                    <dd>Batthing Hand: {item.playerProfile.playerBattingHandednessName}</dd>
                    <dd>Throwing Hand: {item.playerProfile.playerThrowingHandednessName}</dd>

                    <Link id="reportlink" class="btn btn-primary me-3" to={{
                        pathname: `/myplayers/playerprofile`,
                        state: {
                            player: item.playerProfile,
                        }
                    }}>View Profile</Link>

                    <Link id="reportlink" class="btn btn-primary me-3" to={{
                        pathname: `/myplayers/editplayer`,
                        state: {
                            player: item.playerProfile,
                        }
                    }}>Edit Profile</Link>

{/*                     <input type="button" class="btn btn-primary" value="Delete Player" onClick={(event) => deletePlayer(item.playerProfileId)} />
 */}
                    <br/><br/>
            </React.Fragment>
        );
    })
    // display players
        return (
            <div>
                <dl>
                    {showPLayers}
                </dl>
            </div>
        )
    }

export default DisplayMyPlayers;