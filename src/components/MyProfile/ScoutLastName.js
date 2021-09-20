import React, { useState } from "react";
import axios from 'axios';

// Scout account registration form
const ScoutLastName = (props) => {
    // get passed in props
    const id = props.id;
    const currentUser = props.currentUser;

    const [lastName, setLastName] = useState();

	// call the database and try to post edited scout info
	async function editScoutLastName(last, id) {
		const updateInfo = {
			"lastName": last,
            "id": id,
		}

		let response = await axios.put(`https://localhost:44394/api/myproscout/edit/lastname`, updateInfo);
		
/* 		if (response) {
			console.log("firstnamegood api call");
		} else {
			console.log("bad api call");
		} */
	}
	
    // submits account registration request
	const handleSubmit = (event) => {
		event.preventDefault();
		editScoutLastName(lastName, id);
		window.location = "/editmyprofile";
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
			<label class="form-label input-group">Last Name</label>
				<input id="inputfields" type="text" placeholder={currentUser.lastName} value={lastName} onChange={(event) => setLastName(event.target.value)} class="input-group-text mb-1" /><br/>
				
				<input type="submit" value="Save Change" id="newreportbutton" class="mb-4" />

            </form>
		</div>
	);
}

export default ScoutLastName;