import React from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

// Component or hook imports
import useGetOrganization from "../../hooks/useGetOrganization";

// Scout organization page
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

    // display scout's orgnaizations' name, message, and players links
        return (
            <div id="pages">
                <h3 id="pagetitle">{organization.organizationName} Scout Hub</h3>

                <br/>

                <Link id="reportlink" to={{
                        pathname: `/myorg/messageboard`,
                        state: {
                            myOrganization: organization,
                        }
                    }}>myOrg Message Board</Link>

                <Link id="reportlink" to={{
                        pathname: `/myorg/myorgplayers`,
                        state: {
                            myOrganization: organization,
                            scout: scout,
                        }
                    }}>myOrg's Players</Link>

                <Link id="reportlink" to={{
                        pathname: `/myorg/assignmyorg`,
                        state: {
                            user: scout,
                        }
                    }}>Assign myOrg</Link>

                <Link id="reportlink" to={{
                        pathname: `/myorg/changemyorg`,
                        state: {
                            myOrganization: organization,
                            user: scout,
                        }
                    }}>Change myOrg</Link>

                <Link id="reportlink" to={{
                        pathname: `/myorg/AddNewOrg`,
                        state: {
                            myOrganization: organization,
                        }
                    }}>Add newOrg</Link>


             </div>
        )
    }

export default MyOrg;