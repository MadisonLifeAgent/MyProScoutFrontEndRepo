import React from "react";

// landing page after updating player info
const PlayerUpdatedLandingPage = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">Player Updated.</h4>
            <a id="newnotebutton" href="/myplayers">Go to myPlayers</a>
            <a id="newnotebutton" href="/myorg">Go to myOrg</a>
        </div>
    )
}

export default PlayerUpdatedLandingPage;