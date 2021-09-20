import React from "react";
import jwtDecode from "jwt-decode";

// Component or hook imports
import DisplayMyPlayers from "./DisplayMyPlayers";

// displays players belong to a scout
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
   
// displays team, regions, competition levels and create or edit buttons
    return (
        <div id="pages">
            <h3 id="pagetitle">myPlayers</h3>
            <DisplayMyPlayers scout={scout} />
            
        </div>
    )
}
        // return profile page is user logged in




export default MyPlayers;
