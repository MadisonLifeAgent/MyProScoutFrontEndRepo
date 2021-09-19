import React from "react";
import { Link } from 'react-router-dom';


const MyPlayerAdded = (props) => {
    const scout = props.location.state.scout;
    const player = props.location.state.player;

    return (
        <div>
            <h4>{player.firstName} {player.lastName} has been added to your myPlayers.</h4>

            <Link class="btn btn-primary me-3" to={{
                        pathname: `/myplayers`,
                        state: {
                            scout: scout,
                        }
                    }}>Go to myPlayers</Link>


        </div>
    )

}

export default MyPlayerAdded;