import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutFirstName = (props) => {
    // get passed in props
    const user = props.user;
    const userDetails = props.userDetails;

    const [firstName, setFirstName] = useState();

	// call the database and try to post edited scout info
	async function editScoutFirstName(newFirst, id) {
		const updateInfo = {
			"FirstName": newFirst,
            "Id": id,
		}
		console.log(updateInfo);

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/firstname`, updateInfo);
		
		if (response) {
			console.log("firstnamegood api call");
			window.location = "/editmyprofile/updatesaved";
		} else {
			console.log("bad api call");
		}
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutFirstName(firstName, user.id);
	}

	
	return (
		<div class="p-3 mt-3">
			<form onSubmit={handleSubmit}>
                <label class="form-label input-group">First Name</label>
				<input id="inputfields" type="text" placeholder={userDetails.firstName} value={firstName} onChange={(event) => setFirstName(event.target.value)} class="input-group-text mb-1" required /><br/>
				
				<input type="submit" value="Save New First Name" id="newreportbutton" class="mb-2"/>

            </form>
		</div>
	);
}

export default ScoutFirstName;