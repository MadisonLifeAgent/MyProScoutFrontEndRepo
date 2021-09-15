import React from "react";
import jwtDecode from "jwt-decode";

// Component or hook imports
import useGetOrganization from "../../hooks/useGetOrganization";
import DisplayMyOrgMessages from "./DisplayMyOrgMessages";

// Scout profile page
const MyOrg = () => {
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
    const organization = useGetOrganization(scout.id);

    
// this page needs the following
    // name of organization at the top COMPLETE
        // ability to add and join a new organization
    // scouting reports by organization
    // organization messages (COMPLETE)
        // add new messages



    // display scout's name, orgnaization, and list of players with recent scouting reports
        return (
            <div>
{/*                 <h3> myOrg Page</h3>
 */}                <h3>{organization.organizationName} Scout Hub</h3>
                    <DisplayMyOrgMessages scout={scout} organization={organization} />

            </div>
        )
    }
    // return profile page is user logged in




export default MyOrg;