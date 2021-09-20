import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutPhoneNumber = (props) => {
    // get passed in props
    const user = props.user;
    const userDetails = props.userDetails;

    const [phoneNumber, setPhoneNumber] = useState();

	// call the database and try to post edited scout info
	async function editScoutPhoneNumber(phoneNumber, id) {
		const updateInfo = {
			"PhoneNumber": phoneNumber,
            "Id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/phonenumber`, updateInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good");
		} else {
			console.log("bad api call");
		}
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutPhoneNumber(phoneNumber, user.id);
		//window.location = "/myprofile";
	}

	
	return (
		<div class="p-3">
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Phone Number</label>
				<input id="inputfields" type="text" placeholder={userDetails.phoneNumber} value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} class="input-group-text mb-1" required /><br/>
				
				<input type="submit" value="Save New Phone Number" id="newreportbutton" class="mb-2" />

            </form>
		</div>
	);
}

export default ScoutPhoneNumber;