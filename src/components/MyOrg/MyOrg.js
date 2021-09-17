import React from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

// Component or hook imports
import useGetOrganization from "../../hooks/useGetOrganization";

// Scout profile page
const MyOrg = (props) => {
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            console.log(user);
            return user;
        } catch {
        }
    }
    // get the scout's account info
    const scout = getUser();

    
    // Get scout's oranization info
    const organization = useGetOrganization(scout.id); // make this into it's own component??


    // display scout's orgnaizations' name, message, and players
        return (
            <div>
                <h3>{organization.organizationName} Scout Hub</h3>

                <br/>

                <Link class="btn btn-primary me-3" to={{
                        pathname: `/myorg/messageboard`,
                        state: {
                            myOrganization: organization,
                        }
                    }}>myOrg Message Board</Link>
             </div>
        )
    }
    // return profile page is user logged in




export default MyOrg;

// this page needs the following
    // name of organization at the top COMPLETE
        // ability to add and join a new organization
    // scouting reports by organization
    // organization messages (COMPLETE)
        // add new messages