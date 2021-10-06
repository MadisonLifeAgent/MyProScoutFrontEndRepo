import React from "react";

// landing page after adding a new player
const NewPlayerAdded = (props) => {
    return (
        <div id="pages">
            <h4 id="pagetitle">New Player Added.</h4>
            <p>To add player to your myPlayers go to myOrg.</p>
            <a id="newnotebutton" href="/myOrg">Go to myOrg</a>
        </div>
    )
}

export default NewPlayerAdded;