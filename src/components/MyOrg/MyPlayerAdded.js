import React from "react";
import { Link } from 'react-router-dom';

// this page displays after adding a player
const MyPlayerAdded = (props) => {
    const scout = props.location.state.scout;
    const player = props.location.state.player;

    return (
        <div id="pages">
            <h4 id="pagetitle">{player.firstName} {player.lastName} has been added to your myPlayers.</h4>

            <Link id="newnotebutton" to={{
                        pathname: `/myplayers`,
                        state: {
                            scout: scout,
                        }
                    }}>Go to myPlayers</Link>
        </div>
    )
}

export default MyPlayerAdded;