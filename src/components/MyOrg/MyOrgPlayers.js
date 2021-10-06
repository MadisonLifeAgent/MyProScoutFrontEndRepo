import React from "react";

// Component or hook imports
import DisplayPlayers from '../MyPlayers/DisplayPlayers';

// displays players belong to a scout
const MyOrgPlayers = (props) => {
    const scout = props.location.state.scout;
    const myOrg = props.location.state.myOrganization

   
// displays team, regions, competition levels and create or edit buttons
    return (
        <div id="pages">
            <h3 id="pagetitle">myOrg's Players</h3>

            <a id="newnotebutton" class="m-0" href="/myorg">Go Back</a>

            <DisplayPlayers  scout={scout} />

            <a id="newnotebutton" class="m-0" href="/myorg">Go Back</a>

        </div>
    )
}

export default MyOrgPlayers;
