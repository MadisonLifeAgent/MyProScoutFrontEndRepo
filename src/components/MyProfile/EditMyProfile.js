import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// component imports
import ScoutFirstName from "./ScoutFirstName";
import ScoutLastName from "./ScoutLastName";
import ScoutEmail from "./ScoutEmail";
import ScoutPhoneNumber from "./ScoutPhoneNumber";
import ScoutUserName from "./ScoutUsername";

// Scout account registration form
const EditMyProfile = (props) => {
    const user = props.location.state.user;

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
		<div>
			<h3>Edit myProfile</h3>
                <ScoutFirstName currentUser={currentUser} id={id} />
				
                <ScoutLastName currentUser={currentUser} id={id} />

                <ScoutEmail currentUser={currentUser} id={id} />

                <ScoutPhoneNumber currentUser={currentUser} id={id} />
                <ScoutUserName currentUser={currentUser} id={id} />


                <Link class="btn btn-primary me-3" to={{
                        pathname: `/myprofile`,
                        state: {
                            user: user,
                        }
                    }}>Go Back</Link>

		</div>
	);
}

export default EditMyProfile;