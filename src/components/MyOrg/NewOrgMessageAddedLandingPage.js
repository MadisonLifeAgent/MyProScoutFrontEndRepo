import React from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

import useGetOrganization from "../../hooks/useGetOrganization";


const NewOrgMessageAddedLandingPage = () => {
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
    const organization = useGetOrganization(scout.id); // make this into it's own 

    return (
        <div id="pages">
            <h3 id="pagetitle">Your Message has been posted!</h3>

            <Link id="reportlink" to={{
                        pathname: `/myorg/messageboard`,
                        state: {
                            myOrganization: organization,
                            scout: scout
                        }
                    }}>View Message Board</Link>
                    

        </div>

    )
}

export default NewOrgMessageAddedLandingPage;