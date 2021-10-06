import React from "react";
import jwtDecode from "jwt-decode";

// Component or hook imports
import DisplayMyPlayers from "./DisplayMyPlayers";

// displays players that belong to a scout
const MyPlayers = (props) => {
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            console.log(user);
            return user;
        } catch {
        }
    }

    const scout = getUser();
   
// displays a scouts players
    return (
        <div id="pages">
            <h3 id="pagetitle">myPlayers</h3>
            <DisplayMyPlayers scout={scout} />
            
        </div>
    )
}

export default MyPlayers;
