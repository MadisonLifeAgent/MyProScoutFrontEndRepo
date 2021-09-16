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
                <label>Last Name</label>
				<input type="text" placeholder={currentUser.lastName} value={lastName} onChange={(event) => setLastName(event.target.value)} class="ms-3 mb-3" /><br/>
				
				<input type="submit" value="Save Change" class="btn btn-primary ms-3 mb-3 " />

            </form>
		</div>
	);
}

export default ScoutLastName;