import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutPhoneNumber = (props) => {
    // get passed in props
    const id = props.id;
    const currentUser = props.currentUser;

    const [phoneNumber, setPhoneNumber] = useState();

	// call the database and try to post edited scout info
	async function editScoutPhoneNumber(phoneNumber, id) {
		const updateInfo = {
			"phoneNumber": phoneNumber,
            "id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/phonenumber`, updateInfo);
		
/* 		if (response) {
			console.log(response.data);
		} else {
			console.log("bad api call");
		} */
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutPhoneNumber(phoneNumber, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <label>Phone Number</label>
				<input type="text" placeholder={currentUser.phoneNumber} value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="submit" value="Save Change" class="btn btn-primary ms-3 mb-3 " />

            </form>
		</div>
	);
}

export default ScoutPhoneNumber;