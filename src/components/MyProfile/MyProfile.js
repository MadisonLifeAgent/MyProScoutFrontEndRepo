import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";

// Scout profile page
const MyProfile = (props) => {
    const jwt = localStorage.getItem('token');
    function getUser() {
        try{
            const user = jwtDecode(jwt);
            return user;
        } catch {
        }
    }
    // get the scout's account info
    const user = getUser();

    const [userDetails, setUserDetails] = useState([]);
    const [userOrg, setUserOrg] = useState({});

    // get the user's details
    async function getUserDetails(token) {
        const response = await axios.get(`https://localhost:44394/api/myproscout/user`, { headers: {Authorization: 'Bearer ' + token}});
        setUserDetails(response.data);
    }

    async function getOrganization(userId) {
        const response = await axios.get(`https://localhost:44394/api/scoutorganizationjoin/${userId}`);
        // if good api call set scoutOrganizatin
        setUserOrg(response.data);
        console.log(response.data);
    }
       
    // get user details and org
    useEffect(() => {
        getUserDetails(jwt);
        getOrganization(user.id);
    },[]);

   // display scout profile details
    return (
        <div id="pages">
            <h3 id="pagetitle">{user.username}'s myProfile</h3>

            <Link id="newnotebutton" to={{
                    pathname: `/editmyprofile`,
                    state: {
                        user: user,
                        userDetails: userDetails,
                    }
                }}>Edit myProfile</Link>
            <dl id="mapped">
                <dt>Name: {userDetails.firstName} {userDetails.lastName}</dt>
                <dd>Email: {userDetails.email}</dd>
                <dd>Phone: {userDetails.phoneNumber}</dd>
                <dd>myOrg: {userOrg.organizationName}</dd>
            </dl>
        </div>
    )
}
export default MyProfile;