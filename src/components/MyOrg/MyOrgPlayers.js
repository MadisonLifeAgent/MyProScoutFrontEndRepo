import React from "react";

// Component or hook imports
import DisplayPlayers from '../MyPlayers/DisplayPlayers';

// displays players belong to a scout
const MyOrgPlayers = (props) => {
    const scout = props.location.state.scout;
    const myOrg = props.location.state.myOrganization

   
// displays team, regions, competition levels and create or edit buttons
    return (
        <div>
            <h3>myPlayers</h3>
            <DisplayPlayers  scout={scout} />
        </div>
    )
}
        // return profile page is user logged in




export default MyOrgPlayers;
