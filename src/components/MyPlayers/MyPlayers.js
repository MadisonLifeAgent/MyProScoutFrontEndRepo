import React from "react";

// Component or hook imports
import DisplayPlayers from "./DisplayPlayers";

// displays players belong to a scout
const MyPlayers = (props) => {
   
// displays team, regions, competition levels and create or edit buttons
    return (
        <div>
            <h3>myPlayers</h3>
            <DisplayPlayers />
        </div>
    )
}
        // return profile page is user logged in




export default MyPlayers;
