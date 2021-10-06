import React, { useState } from "react";
import axios from 'axios';

// Scout lastname change form
const ScoutLastName = (props) => {
    // get passed in props
    const user = props.user;
    const userDetails = props.userDetails;

    const [lastName, setLastName] = useState();

	// call the database and try to post edited scout last name
	async function editScoutLastName(last, id) {
		const updateInfo = {
			"LastName": last,
            "Id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/lastname`, updateInfo);
		
		if (response) {
			console.log("firstnamegood api call");
			window.location = "/editmyprofile/updatesaved";
		} else {
			console.log("bad api call");
		}
	}
	
    // submits lastname change
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutLastName(lastName, user.id);
	}
	
	return (
		<div class="p-3">
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Last Name</label>
				<input id="inputfields" type="text" placeholder={userDetails.lastName} value={lastName} onChange={(event) => setLastName(event.target.value)} class="input-group-text mb-1" required /><br/>
				
				<input type="submit" value="Save New Last Name" id="newreportbutton" class="mb-2" />

            </form>
		</div>
	);
}

export default ScoutLastName;