import React, { useState, useEffect } from "react";
import axios from 'axios';

// component imports
import ScoutFirstName from "./ScoutFirstName";
import ScoutLastName from "./ScoutLastName";
import ScoutEmail from "./ScoutEmail";
import ScoutPhoneNumber from "./ScoutPhoneNumber";
import ScoutUserName from "./ScoutUsername";

// Scout account registration form
const EditMyProfile = (props) => {
    const jwt = localStorage.getItem('token');

    //const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();

    //get current user details
    const [currentUser, setCurrentuser] = useState({});
    const [id, setId] = useState();

    // this function gets the current scout's information
    async function getScoutInformation(token) {
    	const response  = await axios.get(`https://localhost:44394/api/myproscout/user`, { headers: {Authorization: 'Bearer ' + token}});
		
		if (response.data) {
			console.log("good api call");
            setCurrentuser(response.data);
            setId(response.data.id);
		} else {
			console.log("bad api call");
		}
	}

    // get scout information that is to be edited
    useEffect(() => {
        getScoutInformation(jwt);  // add if/else statement
    },[]);

	// call the database and try to post edited scout info
	async function editMyProfile(first, last, user, useremail, phone, id) {
		const updateInfo = {
			"firstName": first,
			"lastName": last,
			"userName": user,
			"email": useremail,
			"phoneNumber": phone,
            "id": id,
		}

        console.log(updateInfo);

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit`, updateInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good api call");
		} else {
			console.log("bad api call");
		}
	}


	// edit profile input fields
	return (
		<div>
			<h3>Edit myProfile</h3>
                <ScoutFirstName currentUser={currentUser} id={id} />
				
                <ScoutLastName currentUser={currentUser} id={id} />

                <ScoutEmail currentUser={currentUser} id={id} />

                <ScoutPhoneNumber currentUser={currentUser} id={id} />
                <ScoutUserName currentUser={currentUser} id={id} />			
		</div>
	);
}

export default EditMyProfile;