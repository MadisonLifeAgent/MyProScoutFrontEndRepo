import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutUserName = (props) => {
    // get passed in props
    const id = props.id;
    const currentUser = props.currentUser;

    const [username, setUsername] = useState();

	// call the database and try to post edited scout info
	async function editScoutUsername(username, id) {
		const updateInfo = {
			"username": username,
            "id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/username`, updateInfo);
		
		/* if (response) {
			console.log(response.data);
		} else {
			console.log("bad api call");
		} */
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutUsername(username, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Username</label>
				<input id="inputfields" type="text" placeholder={currentUser.userName} value={username} onChange={(event) => setUsername(event.target.value)} class="input-group-text mb-1" /><br/>
				
				<input type="submit" value="Save Change" id="newreportbutton" class="mb-5" />

            </form>
		</div>
	);
}

export default ScoutUserName;