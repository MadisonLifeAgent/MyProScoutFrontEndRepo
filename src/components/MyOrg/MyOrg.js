import React from "react";

// Component or hook imports
import useGetOrganization from "../../hooks/useGetOrganization";

// Scout profile page
const MyOrg = (props) => {
    const scout = props.user;
    console.log("scout");
    console.log(scout);






    // display scout's name, orgnaization, and list of players with recent scouting reports
        return (
            <div>
                <h3>myOrg Page</h3>
                
            </div>
        )
    }
    // return profile page is user logged in




export default MyOrg;