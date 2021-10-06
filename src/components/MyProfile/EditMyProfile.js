import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// component imports
import ScoutFirstName from "./ScoutFirstName";
import ScoutLastName from "./ScoutLastName";
import ScoutEmail from "./ScoutEmail";
import ScoutPhoneNumber from "./ScoutPhoneNumber";
import ScoutUserName from "./ScoutUsername";
import "./EditMyProfile.css";

// edit scout profile page
const EditMyProfile = (props) => {
    const user = props.location.state.user;
    const userDetails = props.location.state.userDetails;

    const jwt = localStorage.getItem('token');

	//get current user details
    const [currentUser, setCurrentuser] = useState({});
    const [id, setId] = useState();

    // this function gets the current scout's information
    async function getScoutInformation(token) {
    	const response  = await axios.get(`https://localhost:44394/api/myproscout/user`, { headers: {Authorization: 'Bearer ' + token}});
		
		/* if (response.data) {
			console.log("good api call"); */
            setCurrentuser(response.data);
            setId(response.data.id);
		/* } else {
			console.log("bad api call");
		} */
	}

    // get scout information that is to be edited
    useEffect(() => {
        getScoutInformation(jwt);
    },[]);


	// edit profile input fields
	return (
		<div id="forms">
			<h3 id="pagetitle">Edit myProfile</h3>
            <Link id="newnotebutton" to={{
                        pathname: `/myprofile`,
                        state: {
                            user: user,
                        }
                    }}>Go Back</Link>
                    
                <ScoutFirstName currentUser={currentUser} user={user} userDetails={userDetails} />
				
                <ScoutLastName currentUser={currentUser} user={user} userDetails={userDetails} />

                <ScoutEmail currentUser={currentUser} user={user} userDetails={userDetails} />

                <ScoutPhoneNumber currentUser={currentUser}user={user} userDetails={userDetails} />

                <ScoutUserName currentUser={currentUser} user={user} userDetails={userDetails} />

                <Link id="newnotebutton" to={{
                        pathname: `/myprofile`,
                        state: {
                            user: user,
                            userDetails: userDetails,
                        }
                    }}>Go Back</Link>
		</div>
	);
}

export default EditMyProfile;