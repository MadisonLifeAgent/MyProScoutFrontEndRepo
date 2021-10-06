import React, { useState } from "react";
import axios from 'axios';

// Scout username change form
const ScoutUserName = (props) => {
    // get passed in props
    const user = props.user;
    const userDetails = props.userDetails;

    const [username, setUsername] = useState();

	// call the database and try to post edited scout username
	async function editScoutUsername(username, id) {
		const updateInfo = {
			"Username": username,
            "Id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/username`, updateInfo);
		
		if (response) {
			console.log(response.data);
			console.log("good");
			window.location = "/editmyprofile/updatesaved";
		} else {
			console.log("bad api call");
		}
	}
	
    // submits username change request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutUsername(username, user.id);
	}

	return (
		<div class="p-3 mb-3">
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Username</label>
				<input id="inputfields" type="text" placeholder={userDetails.userName} value={username} onChange={(event) => setUsername(event.target.value)} class="input-group-text mb-1" required/><br/>
				
				<input type="submit" value="Save Change" id="newreportbutton" class="mb-2" />

            </form>
		</div>
	);
}

export default ScoutUserName;