import React, { useState } from "react";
import axios from 'axios';

// Scout email form
const ScoutEmail = (props) => {
    // get passed in props
    const user = props.user;
    const userDetails = props.userDetails;

    const [email, setEmail] = useState();

	// call the database and try to post edited scout email
	async function editScoutEmail(email, id) {
		const updateInfo = {
			"Email": email,
            "Id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/email`, updateInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good");
			window.location = "/editmyprofile/updatesaved";
		} else {
			console.log("bad api call");
		}
	}
	
    // submits email change request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutEmail(email, user.id);
	}
	
	return (
		<div class="p-3">
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Email</label>
				<input id="inputfields" type="text" placeholder={userDetails.email} value={email} onChange={(event) => setEmail(event.target.value)} class="input-group-text mb-1" required/><br/>
				
				<input type="submit" value="Save New Email" id="newreportbutton" class="mb-2" />
            </form>
		</div>
	);
}

export default ScoutEmail;